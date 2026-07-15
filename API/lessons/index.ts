import { gamesList, lessonsList } from '@/staticData/ebooks';
import type { Game } from "@/components/Lessons/types";

export async function getBookLessons(_bookId: number) {
  return lessonsList;
}

export async function getAllGames(): Promise<Game[]> {
  return gamesList;
}

export interface GamesResponse {
  id: number;
  type: string;
  key: string;
  value: Game[];
  meta_keywords: null;
  meta_description: null;
}