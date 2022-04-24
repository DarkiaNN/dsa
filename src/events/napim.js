export default client => {
    client.on("messageCreate", message => {
        if (message.content.toLowerCase() === ".napim") {
            if (message.author.id != "802959057781522442" || message.author.id != "287950275363340299") return;
            message.reply("https://tenor.com/view/napim-napim-nap%C4%B1m-ne-var-kedi-gif-21148685")
        }
    })
}