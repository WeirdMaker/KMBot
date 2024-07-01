require('dotenv').config(); //Access .env file
const { Client, IntentsBitField } = require('discord.js') //Access 'discord.js'

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
}); //Access to functions

client.on('ready', (c) => {
    console.log(`${c.user.tag} (BOT) is online.`);
}); //Check if bot is ready, and print "[Bot Name] is online." if it is.

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    } //Check if message author is a bot.
    if (message.content === 'Hey KM') {
        message.reply('How can I help you?')
    } //Check the message which received and giving reply.
    if (message.author.id === '1089904247421804585') {
        message.reply('The Upper Message Author Is Gay!')
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('Hi!')
    }

    if (interaction.commandName === 'calc') {
        const num1 = interaction.options.get('firstnum').value;
        const num2 = interaction.options.get('secondnum').value;
        const opr = interaction.options.get('operation').value;
        switch (opr) {
            case 'add':
                interaction.reply(`${num1 + num2}`)
                break;
            case 'sub':
                interaction.reply(`${num1 - num2}`)
            case 'mul':
                interaction.reply(`${num1 * num2}`)
            case 'div':
                interaction.reply(`${num1 / num2}`)
        }
    }
});

client.login(process.env.TOKEN); //Login




