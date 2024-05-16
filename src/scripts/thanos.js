import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        for (let i = contacts.length - 1; i >= 0; i--) {
            if (Math.random() < 0.5) {
                contacts.splice(i, 1);
            }
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log('Операція успішно виконана.');
    } catch (error) {
        console.error('Помилка під час видалення контактів:', error);
    }
};

await thanos();
