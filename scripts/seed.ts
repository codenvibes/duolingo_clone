import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: "Spanish", imageSrc: "assets/icons/flags/Spanish.svg" },
      { id: 2, title: "Catalan", imageSrc: "assets/icons/flags/Catalan.svg" },
      { id: 3, title: "Chinese", imageSrc: "assets/icons/flags/Chinese.svg" },
      { id: 4, title: "Czech", imageSrc: "assets/icons/flags/Czech.svg" },
      { id: 5, title: "Danish", imageSrc: "assets/icons/flags/Danish.svg" },
    ]);

    await db.insert(schema.units).values([
      { id: 1, courseId: 1, title: "Unit 1", description: "Learn the basics of Spanish", order: 1 },
    ]);

    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, title: "Nouns", order: 1 },
      { id: 2, unitId: 1, title: "Verbs", order: 2 },
      { id: 3, unitId: 1, title: "Adjectives", order: 3 },
      { id: 4, unitId: 1, title: "Phrases", order: 4 },
      { id: 5, unitId: 1, title: "Sentences", order: 5 },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which ones of these is "the man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which ones of these is "the boy"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      { 
        challengeId: 1,
        text: "el hombre",
        correct: true,
        imageSrc: "/assets/images/man.svg",
        audioSrc: "/audio/es_man.mp3"
      },
      { 
        challengeId: 1,
        text: "la mujer",
        correct: false,
        imageSrc: "/assets/images/woman.svg",
        audioSrc: "/audio/es_woman.mp3"
      },
      { 
        challengeId: 1, 
        text: "el nino",
        correct: false,
        imageSrc: "/assets/images/boy.svg",
        audioSrc: "/audio/es_boy.mp3"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      { 
        challengeId: 2,
        text: "el hombre",
        correct: true,
        audioSrc: "/audio/es_man.mp3"
      },
      { 
        challengeId: 2,
        text: "la mujer",
        correct: false,
        audioSrc: "/audio/es_woman.mp3"
      },
      { 
        challengeId: 2,
        text: "el nino",
        correct: false,
        audioSrc: "/audio/es_boy.mp3"
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      { 
        challengeId: 3, // Which ones of these is "the boy"?
        text: "el hombre",
        correct: false,
        imageSrc: "/assets/images/man.svg",
        audioSrc: "/audio/es_man.mp3"
      },
      { 
        challengeId: 3,
        text: "la mujer",
        correct: false,
        imageSrc: "/assets/images/woman.svg",
        audioSrc: "/audio/es_woman.mp3"
      },
      { 
        challengeId: 3, 
        text: "el nino",
        correct: true,
        imageSrc: "/assets/images/boy.svg",
        audioSrc: "/audio/es_boy.mp3"
      },
    ]);

    console.log("Sedding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
