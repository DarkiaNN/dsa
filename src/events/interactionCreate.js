import cooldown_control from "../utils/cooldown_control.js"

export default client => {
    client.on("interactionCreate", interaction => {
        if (!interaction.isCommand()) return

        const command = client.commands.get(interaction.commandName)
        if (!command) return
        
        if (command.data.permission && !interaction.member.permissions.has(command.data.permission)) return interaction.reply(
            `***bu komud içşin yedkin yok sikmeyeyim belanı***`
        )
        
        const cooldown = cooldown_control(command, interaction.member.id)
        if (cooldown) return interaction.reply(`***cojk yazyon yazma ${cooldown} sanye bekle***`)

        try {
            command.data.execute(interaction)
        } catch(e) {
            interaction.reply(`***komutsorunlu akrdeş***`)
            console.error(e)
        }
    })
}