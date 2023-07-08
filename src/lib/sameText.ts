interface AccentsMap {
  [key: string]: string;
}
const accentsMap: AccentsMap = {
  "-": " |_",
  a: "á|à|ã|â|ä|À|Á|Ã|Â|Ä",
  e: "é|è|ê|ë|É|È|Ê|Ë",
  i: "í|ì|î|ï|Í|Ì|Î|Ï",
  o: "ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö",
  u: "ú|ù|û|ü|Ú|Ù|Û|Ü",
  c: "ç|Ç",
  n: "ñ|Ñ",
};

const slugify = (text: string): string =>
  Object.keys(accentsMap)
    .reduce((acc, cur) => {
      return acc?.replace(new RegExp(accentsMap[cur], "g"), cur);
    }, text)
    .toUpperCase()
    .replaceAll(/[^A-Z0-9-]/gi, "");

export const sameText = (content: string, value: string): boolean =>
  slugify(content).includes(slugify(value));
