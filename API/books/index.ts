import { booksList, emptyHighlights } from '@/staticData/ebooks';
import { GetHightlightsResponse, StoreHighlightPayload } from "./types";

export async function getBooks() {
  return { books: booksList };
}

export async function getHightlights(_query: { selected_book_id?: number, selected_from?: string, selected_to?: string }): Promise<GetHightlightsResponse> {
  return emptyHighlights as GetHightlightsResponse;
}

export async function storeHighlight(_payload: StoreHighlightPayload) {
  return { success: true };
}

export async function deleteHighlight(_id: number) {
  return { success: true };
}
