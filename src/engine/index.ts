import { getInfo } from './scrappers';
import { Telegram } from './distribution';

export const Engine = {
    provide: async () => {
        const res = await getInfo()
        if(res) {
            Telegram.notify('message');
        }
    }
}
