require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
    {
        name: 'calc',
        description: 'Perform Calculations',
        options: [
            {
                name: 'firstnum',
                description: 'The first number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'secondnum',
                description: 'The second number.',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'operation',
                description: 'Addition, Subtraction, Multiplication or Divison.',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    { name: 'Addition', value: 'add' },
                    { name: 'Subtraction', value: 'sub' },
                    { name: 'Multiplication', value: 'mul' },
                    { name: 'Division', value: 'div' },
                ],
            },
        ],
    },
    {
        name: 'remind',
        description: 'Add a reminder.',
        options: [
            {
                name: 'time',
                description: 'HH:MM',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'date',
                description: 'DD:MM:YYYY',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'loop',
                description: 'Choose to repeat reminder',
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.BOTID, process.env.SERVERID),
            { body: commands }
        )

        console.log('Slash commands were registered.')
    } catch (error) {
        console.log(`There is an error: ${error}`)
    }
})();