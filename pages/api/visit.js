import client from '../../src/lib/redis';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Garantir que o cliente está conectado
            if (!client.isOpen) {
                await client.connect();
            }

            const now = new Date();
            const yearMonth = `${now.getFullYear()}-${now.getMonth() + 1}`;

            await client.incr('totalVisits');
            await client.hIncrBy('monthlyVisits', yearMonth, 1);

            console.log('Visit recorded');
            res.status(200).json({ message: 'Visit recorded' });
        } catch (error) {
            console.error('Error recording visit', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
