import { Telegraf } from 'telegraf';

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}
const chatId = process.env.TEST_CHAT_ID;
if (!process.env.BOT_TOKEN) {
    throw new Error('Missing telegram bot token')
}

if (!chatId) {
    throw new Error('Missing telegram chat id')
}

const bot = new Telegraf(process.env.BOT_TOKEN);

export const Telegram = {
    notify: async (message: string) => {
        await bot.telegram.sendMessage(chatId as string, message);
    },
}
