// Импорт Telegraf и Markup
const {
    Telegraf,
    Markup
} = require('telegraf')
// Импорт dotenv для защиты API токена
require('dotenv').config()
// Импорт нашего модуля с константами
const my_const = require('./const')
// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)

// Обработка команды /start
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))
// Обработка команды /help
bot.help((ctx) => ctx.reply(my_const.commands))

bot.hears('Семинары', (ctx) => ctx.reply('/', Markup.keyboard(
    [
        [Markup.button.callback('Дух', 'btn_1'), Markup.button.callback('Душа2', 'btn_2'), Markup.button.callback('Тело', 'btn_3')]
    ]
)
)
)

bot.hears('Дух', (ctx) => ctx.reply('//', Markup.keyboard(
    [
        [Markup.button.callback('Дух33', 'd_1'), Markup.button.callback('Дух34', 'd2_2'), Markup.button.callback('Дух35', 'd3_3')],
        [Markup.button.callback('Дух36', 'd4_1'), Markup.button.callback('Дух37', 'd5_2'), Markup.button.callback('Дух38', 'd6_3')],
        [Markup.button.callback('Дух39', 'd7_1'), Markup.button.callback('Дух40', 'd8_2'), Markup.button.callback('Дух41', 'd9_3')],
        [Markup.button.callback('Назад', 'dff_1')],
    ]
)
)
)

bot.action('dff_1', (ctx) => {
    return ctx.reply('Что')
})
// bot.hears('Дух', (ctx) => ctx.reply(my_const.duh_1))

// Обработка команды /course
// bot.command('course', async (ctx) => {
//     try {
//         await ctx.replyWithHTML('<b>Курввсы</b>', Markup.keyboard(
//             [
//                 [Markup.button.callback('Дух', 'btn_1'), Markup.button.callback('Душа', 'btn_2'), Markup.button.callback('Тело', 'btn_3')]
//             ]
//         ))
//     } catch (e) {
//         console.error(e)
//     }
// })


// Запустить бота
bot.launch()

// Включить плавную остановку
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))