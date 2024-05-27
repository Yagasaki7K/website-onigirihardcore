import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_URL,
        port: 17967
    }
});

client.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
    try {
        if (!client.isOpen) {
            await client.connect();
        }
    } catch (err) {
        console.error('Error connecting to Redis', err);
    }
})();

export default client;
