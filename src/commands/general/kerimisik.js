import { SlashCommandBuilder } from "@discordjs/builders"
import { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior, AudioPlayerStatus } from "@discordjs/voice"

export const data =  {
    name: "kerimisik",
    description: "kerimin anasına söv😤😤😤😡🤬😡🤬",
    permission: "MUTE_MEMBERS",
    execute(interaction) {
        const kerim = interaction.guild.members.fetch("802959057781522442").then(e => console.log(e))

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });

        const resource = createAudioResource('C:\\Users\\eagle\\Desktop\\botolur\\src\\selcuk.mp3');
        player.play(resource);

        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channelId,
            guildId: interaction.guildId,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator

        })

        const sub = connection.subscribe(player)

        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
        })

        interaction.reply("***sövdüm agam***")

    }
}

export const slash_data = new SlashCommandBuilder()
    .setName(data.name)
    .setDescription(data.description)