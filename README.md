# MessMetrics
MessMetrics is a campus mess analytics platform designed to track meal demand, food consumption, and food waste. The system helps mess administrators understand eating patterns, monitor wastage, and make better data-driven decisions about meal preparation.

The project combines Advanced Programming and Data Engineering concepts to build a complete backend-driven application.

🎯 Objectives
	
  •	Track daily meals, attendance, food preparation, and food waste
	•	Monitor food consumption patterns across different meals and days
	•	Provide analytics on food wastage and meal demand
	•	Help mess administrators make better preparation decisions
	•	Maintain structured and reliable food-related data


The goal is to create a simple, practical, and scalable campus mess management system where operational data can be transformed into useful insights, ultimately helping reduce unnecessary food waste and improve meal planning.

Build smarter. Waste less.


## Neon PostgreSQL Setup

MessMetrics uses PostgreSQL hosted on Neon.

### Setup

From the `backend` directory:

```bash
npm install
cp .env.example .env
```

The Neon connection string is stored in `.env`:

```env
DATABASE_URL="your-neon-connection-string"
```

The database connection is configured in:

```text
backend/src/db/db.js
```

> **Note:** `.env` contains database credentials and is excluded from version control. `.env.example` provides the required environment variable structure.