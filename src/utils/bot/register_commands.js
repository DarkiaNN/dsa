import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"


export default async guild => {
    const {client} = guild

    const rest = new REST({version: "9"}).setToken(process.env.TOKEN)

    const body = client.commands.map(command => command.slash_data)
    
    try {
        await rest.put(
            Routes.applicationGuildCommands(client.user.id, guild.id),
            { body }
        )
    } catch (e) {
        console.error(e)
        if (e.code == "50001") {
            const owner = await guild.fetchOwner()
            owner.send(`***dayı adam gibi eklesunucuya***`).catch(() => { })
        }
    }
}