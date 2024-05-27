import redisClient from '../../src/lib/redis';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const totalVisits = await redisClient.get('totalVisits');
        const monthlyVisits = await redisClient.hGetAll('monthlyVisits');

        res.status(200).json({ totalVisits, monthlyVisits });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
