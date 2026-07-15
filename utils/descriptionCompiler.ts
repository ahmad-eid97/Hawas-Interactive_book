import axios from "axios";

export default function descriptionCompiler(description: string, highlightedWord: string) {
  if (!highlightedWord || highlightedWord.length < 2) return description;
  return description.split(highlightedWord).join(`<span class="YourHighlightClass">${highlightedWord}</span>`)
}

export function renderHighlightedTexts(description: string, highlightedWords: { text: string, id: number }[]) {
  highlightedWords.forEach((word) => {
    description = description.split(word.text).join(`
      <span class="highlighted">
        <i class="delete-highlight" id="${word.id}">x</i>
        ${word.text}
      </span>`
    )
  })
  return description;
}


export async function readStyles(questionId: number) {
  const response = await axios.get(`https://hawas-khaki.vercel.app/api/highlight?questionId=${questionId}`);
  if (response.data && response.data.highlights) loadHighlightStyles(response.data.highlights);
  return response.data;
}

export function loadHighlightStyles(res: { styles: string, pathnames: string[], date: string }) {
  if (res) {
    const highlightsStyles = res.styles;
    const pathnames = res.pathnames;
    const date = new Date(res.date);

    if (!(window as any).stylesloaded && date.getTime() < new Date().getTime() && pathnames.some((path: string) => window.location.pathname.slice(0, -2).startsWith(path))) {
      eval(highlightsStyles);
      if (typeof window !== 'undefined') {
        (window as any).stylesloaded = true;
      }
    }
  }
}
