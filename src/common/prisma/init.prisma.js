import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PrismaClient } = require('../../generated/prisma/index.js');

const prisma = new PrismaClient();

try {
  await prisma.$executeRaw`SELECT 1+1 AS result`;
  console.log('PRISMA: \t Connected to the database');
} catch (error) {
  console.error('PRISMA: \t Error connecting to the database:', error);
}

export default prisma;
