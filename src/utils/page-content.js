import { LoremIpsum } from "lorem-ipsum";

const pageContent = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
}).generateParagraphs(7);

export default pageContent;
