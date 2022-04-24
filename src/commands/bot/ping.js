import { SlashCommandBuilder } from "@discordjs/builders"

export const data =  {
    name: "ping",
    description: "🤢pingini🤢😒vercek😍🤦‍♀️baska😆neistiyon😒",
    permission: "BAN_MEMBERS",
    execute(interaction) {
        interaction.reply(`***${interaction.client.ws.ping}ms***`)
    }
}

export const slash_data = new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)