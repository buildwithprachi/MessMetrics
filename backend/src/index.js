import prisma from "./db/prisma.js";

async function startServer() {
  try {
    await prisma.$connect();

    console.log("MessMetrics backend is running");
    console.log("Prisma connected to Neon");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer();