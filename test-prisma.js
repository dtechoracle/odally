require('ts-node').register();
const { prisma } = require('./src/lib/prisma.ts');

async function main() {
  console.log('Users:', await prisma.user.findMany());
  console.log('Accounts:', await prisma.account.findMany());
}

main().catch(console.error).finally(() => prisma.$disconnect());
