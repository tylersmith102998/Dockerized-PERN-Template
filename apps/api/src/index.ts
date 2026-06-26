import "dotenv/config";

import cors from "cors";
import express from "express";

import { sharedExample } from "@app/shared";

import { prisma } from "./lib/prisma.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the API! Get started", sharedExample });
});

app.get("/api/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            error: "An error occurred while fetching users.",
        });
    }
});

app.get("/api/createuser", async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email: "test@example.com",
                name: "Test User",
                age: 30,
            },
        });
        res.json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            error: "An error occurred while creating a user.",
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `Server is running on port ${PORT}. PGString: ${process.env.DATABASE_URL}`,
    );
});
