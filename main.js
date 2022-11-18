// GITHUB: https://github.com/xWxcT
// CODE: https://github.com/xWxcT/Discord-to-Discord
const { WebhookClient } = require('discord.js');
const { Client } = require('discord.js-selfbot-v13');

const config = require('./configuration/bot.json');

/* GLOBAL FUNCTIONS */
async function createMessage(message) {
    const data = { username: String(message.author.username), avatarURL: message.author.displayAvatarURL({ format: 'jpg' }) };

    /* MESSAGE CONTENT */
    if (message.content) {
        data['content'] = String(message.content).substring(0, 2000);
    }

    /* MESSAGE EMBEDS */
    if (message.author.bot && message?.embeds?.length) {
        data['embeds'] = message.embeds;
    }

    /* MESSAGE ATTACHMENTS */
    if (message?.attachments?.size) {
        const files = [];

        message.attachments.forEach(file => {
            if (file.size) {
                files.push(file.url);
            }
        });

        data['files'] = files;
    }

    return data;
}
async function sendWebhook(url, data) {
    try {
        const hook = new WebhookClient({ url: url });
        await hook.send(data);
        hook.destroy();
    } catch (error) {
        console.error(`  [ ERROR ]: ${error.message}`);
    }
}

/* DISCORD - ACCOUNT */
const client = new Client({
    intents: [ 'GUILD_MESSAGES', 'MESSAGE_CONTENT' ],
    partials: [ 'MESSAGE' ],
    presence: { status: 'invisible' },
    checkUpdate: false,
    retryLimit: 2,
    restGlobalRateLimit: 50
});

client.once('ready', () => console.info(`You are connected to account ${client.user.tag} with ID ${client.user.id}.`));

client.on('messageCreate', async (m) => {
    if (Object.keys(config.channels).includes(m.channelId)) {
        const data = await createMessage(m);
        await sendWebhook(config.channels[m.channelId], data);
    }
});

client.login(config.discord.token);