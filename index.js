const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    try {
        await prisma.$connect()
        const results = await prisma.results.findMany();
        const players = await prisma.player.findMany();
        const schedule = await prisma.schedule.findMany();
        console.log("results: ", results);
        console.log("players: ", players);
        console.log("schedule: ", schedule);
    } catch (error) {
        console.log(error);
        console.log("keys: ", Object.keys(error));
        console.log("error.errorCode: ", error.errorCode);
        console.log("error.code: ", error.code);
        console.error(JSON.stringify(error, null, 2));
    };
};

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());