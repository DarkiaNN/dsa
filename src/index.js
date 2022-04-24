import { Client, Collection } from "discord.js"
import { readdirSync } from "fs"
import "dotenv/config"

const client = new Client({
    intents: 131071,
    presence: {activities: [{ name: "31 turnuvası", type: "COMPETING"}]}
})

readdirSync("src/events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default)
    event(client)
})

client.commands = new Collection()
readdirSync("src/commands").forEach(category => {
    readdirSync(`src/commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`)
        client.commands.set(command.data.name, command)
    })
})

client.login(process.env.TOKEN)