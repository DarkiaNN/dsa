import cooldown_control from "../utils/cooldown_control.js";

export default client => {
    const prefix = process.env.prefix

    client.on("messageCreate", message => {
       if (!message.content.startsWith(prefix)) return;
       const args = message.content.slice(prefix.length).trim().split(/ +/)
       const commandName = args.shift().toLowerCase()
       
       const command = client.commands.get(commandName)

       if(!command) return

       if (command.permission && !message.member.permissions.has(command.permission)) return message.reply(`**komut için yetkinyok <@802959057781522442> ananı sikmesin**`)
       
       const cooldown = cooldown_control(command, message.member.id)
       if (cooldown) return message.reply(`***cojk yazyon yazma ${cooldown} sanye bekle***`)
       try {
       } catch (e) {
           console.error(e)
           message.reply("***komutsorunlu akrdeş***")
       }
    })
}