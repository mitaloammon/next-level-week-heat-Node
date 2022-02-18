import prismaClient from './../prisma';

class GetLastMessageService {
    async execute() {
        const mesages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            },
        });

        return mesages;
    }
}

export { GetLastMessageService };