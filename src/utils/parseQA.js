/**
 * parseQA.js — Parse the Q&A text-file format used by qa.txt.
 *
 * Format:
 *   # comment
 *   Q: question text
 *   A: answer text
 *
 * Blank lines and comments are ignored. A question/answer pair is
 * formed when a Q: line is followed (eventually) by an A: line.
 *
 * @param {string} text  Raw file contents.
 * @returns {{ q: string, a: string }[]}
 */
export default function parseQA(text) {
  const faqs = [];
  let currentQ = null;

  for (const raw of text.split("\n")) {
    const line = raw.trim();

    // Skip blank lines and comments
    if (!line || line.startsWith("#")) continue;

    if (line.startsWith("Q:")) {
      currentQ = line.slice(2).trim();
    } else if (line.startsWith("A:") && currentQ !== null) {
      faqs.push({ q: currentQ, a: line.slice(2).trim() });
      currentQ = null;
    }
  }

  return faqs;
}
