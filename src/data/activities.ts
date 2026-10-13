import type { Activity } from "../types/activity";

export const activities: Activity[] = [
  { id: "1", title: "Прогулка в парке", description: "Выбери новое место для прогулки.", category: "walks", durationMinutes: 60, cost: 0 },
  { id: "2", title: "Настольная игра", description: "Собери друзей и попробуй новую игру.", category: "games", durationMinutes: 90, cost: 200 },
  { id: "3", title: "Нарисовать открытку", description: "Сделай маленькую открытку своими руками.", category: "creative", durationMinutes: 40, cost: 100 },
];
