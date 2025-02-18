import { Message, CommandInteraction } from "discord.js"
import { BrayanBot } from "../BrayanBot"

export interface Command {
    commandData: {
        Name: string
        Usage?: string
        Array?: string
        Cooldown?: number
        Permission?: string[]
        Description?: string
        DeleteCommand?: boolean
        SlashCommand: {
            Enabled: boolean,
            Data: Object
        }
    };
    runLegacy: (
        manager: BrayanBot, 
        message: Message, 
        args: string[], 
        prefixUsed: string, 
        commandData: Object
    ) => any;
    runSlash: (
        manager: BrayanBot, 
        interaction: CommandInteraction, 
        options: Object[], 
        commandData: Object
    ) => any;
}