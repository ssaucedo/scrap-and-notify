import { Telegraf } from 'telegraf';
import { Update, Message } from 'typegram';

type MessageUpdate = Update.MessageUpdate;

if (!process.env.BOT_TOKEN) {
    throw new Error('Missing telegram bot token')
}

const bot = new Telegraf(process.env.BOT_TOKEN);

const logChatId = async () => {
    const res = await bot.telegram.getUpdates(1000, 100, 0, ['message']);
    res.forEach((update) => {
        try {
            const adaptedUpdate = update as MessageUpdate;
            const adaptedMessage = adaptedUpdate.message as Message.TextMessage;
            const chatId = adaptedMessage.chat.id;
            console.log('New chatId')
            console.log(chatId);
        } catch (e) {
            // skip errors
            return null;
        }
    });
};

logChatId();