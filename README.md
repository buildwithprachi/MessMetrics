# MessMetrics

MessMetrics is a campus mess analytics platform designed to track meal demand, food consumption, and food waste. The system helps mess administrators understand eating patterns, monitor wastage, and make better data-driven decisions about meal preparation.

The project combines Advanced Programming and Data Engineering concepts to build a complete backend-driven application.

## 🎯 Objectives

* Track daily meals, attendance, food preparation, and food waste
* Monitor food consumption patterns across different meals and days
* Provide analytics on food wastage and meal demand
* Help mess administrators make better preparation decisions
* Maintain structured and reliable food-related data

The goal is to create a simple, practical, and scalable campus mess management system where operational data can be transformed into useful insights, ultimately helping reduce unnecessary food waste and improve meal planning.

**Build smarter. Waste less.**

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd MessMetrics
```

### 2. Install Dependencies and Set Up Environment

From the `backend` directory:

```bash
cd backend
npm install
cp .env.example .env
```

### 3. Configure Environment Variables

Open the `.env` file and add your Neon PostgreSQL connection string:

```env
DATABASE_URL="your-neon-database-connection-string"
```

### 4. Set Up Prisma

Generate the Prisma Client:

```bash
npx prisma generate
```

### 5. Start the Backend

```bash
npm run dev
```

The backend should start with:

```text
MessMetrics backend is running
Prisma connected to Neon
```

### 6. Database Changes

After making changes to `prisma/schema.prisma`, create a migration:

```bash
npx prisma migrate dev --name <migration-name>
```

Then regenerate the Prisma Client:

```bash
npx prisma generate
```
