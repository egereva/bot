import { Telegraf, Markup } from 'telegraf'

const token = '7554502248:AAFGKvDkQ6hAPKtgplL38-79eoJiebxr4pE'
const webAppUrl = 'https://lizard-clicker-pro-e0cc2.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press to start the app', Markup.inlineKeyboard([
            Markup.button.webApp(
                'Open mini app',
                `${webAppUrl}?ref=${ctx.payload}`
            )
        ])
    )
})

bot. launch()