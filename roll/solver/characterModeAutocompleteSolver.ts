import { Interaction, InteractionResponseType } from "../../deps.ts";
import { isStoryteller } from "../isStoryteller.ts";
import { updateMode } from "../../characterManager.ts";
import { locale } from "../../i18n/locale.ts";
import * as colors from "../colors.ts";
import { searchCharacter } from "../searchCharacter.ts";
import { CharacterMode } from "../../character.ts";

export async function characterModeAutocompleteSolver(
    interaction: Interaction,
    input: {
        mode: string,
        character?: {
            value: string;
            focused: boolean;
        };
    },
) {
    if (isStoryteller(interaction)) {
        if (input.character && !(await searchCharacter(interaction, input.character))) {
            return;
        }
   
        await updateMode(CharacterMode[CharacterMode[parseInt(input.mode)] as keyof typeof CharacterMode], input.character?.value);

        await interaction.respond({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            embeds: [{
              title: input.character ? locale.storytellerChangeCharacterMode : locale.storytellerChangeAllCharacterMode,
              color: colors.Gray,
            }],
          });
    }
}
