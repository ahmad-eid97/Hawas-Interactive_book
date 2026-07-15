export type Lesson = {
  id: number;
  title: string;
  photo_file: string;
  unit: {
    book: {
      pdf_url: string;
    }
  }
}

export interface Game {
  title: string;
  image: string;
  link: string;
}