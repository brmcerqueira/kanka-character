import { Character, CharacterMode } from "../character.ts";
import { Interaction, InteractionResponseType } from "../deps.ts";
import { locale } from "../i18n/locale.ts";
import { Solver, uploadImage } from "../commands/common.ts";
import { colors, InteractionResponseError } from "../utils.ts";
import { Chronicle } from "../chronicle.ts";

export function buildCharacterSolver<T>(
  parse: (character: Character, input: T) => Promise<number> | number, onlyStoryteller?: boolean
): Solver {
  return async (interaction: Interaction, chronicle: Chronicle, input: T) => {
    const isStoryteller = interaction.user.id == (await chronicle.storyteller());
    if (!onlyStoryteller || isStoryteller) {
      const id = await chronicle.getOrCreateCharacterId(interaction.user.id);

      const character = await chronicle.getCharacter(id);

      if (!isStoryteller && character.mode == CharacterMode.Closed) {
        throw new InteractionResponseError(locale.unauthorized);
      }

      if (character.name == "") {
        character.name = isStoryteller
          ? `${interaction.member!.displayName} ${
            crypto.getRandomValues(new Int8Array(1))
          }`
          : interaction.member!.displayName;
      }

      if (character.image == "") {
        character.image = await uploadImage(interaction.user.avatarURL());
      }

      const spent = await parse(character, input);

      if (character.mode != CharacterMode.Opened) {
        character.experience.spent += spent;
      }

      await chronicle.updateCharacter(character);

      await interaction.respond({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        embeds: [{
          title: locale.characterUpdate,
          color: colors.green,
          fields: [{
            name: locale.character,
            value: character.name,
            inline: true,
          }],
        }],
      });
    }
    else {
      throw new InteractionResponseError(locale.unauthorized);
    }
  };
}