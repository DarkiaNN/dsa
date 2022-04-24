export default client => {
    client.on("messageCreate", message => {
        if (message.content.includes("aga") && message.content.includes("bana") && message.content.includes("oluyo")) {
            message.reply("https://cdn.discordapp.com/attachments/888971844848345149/939290683917865010/161246301_3542383385891484_7495819868541865035_n.mp4")
        }
    })
}