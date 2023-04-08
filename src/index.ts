import * as fs from "fs";

export default function ydKLoaderPlugin(
  options: {
    exclude?: RegExp;
  } = {}
) {
  const { exclude } = options;

  return {
    name: "ydk-loader",
    enforce: "pre" as const,

    async transform(code: string, id: string) {
      if (/\.ydk$/.test(id) && (!exclude || !exclude.test(id))) {
        const data = fs.readFileSync(id, "utf8");
        const deck: IDECK = { main: [], extra: [], side: [] };
        let type = ""; // main, extra, side

        data.split("\n").forEach((line) => {
          // Skip empty lines
          if (line.trim() === "") return;
          // Change section
          if (line.startsWith("#") || line.startsWith("!")) {
            type = line.trim().substring(1).toLowerCase();
          } else if (type === "main") {
            deck.main.push(Number(line.trim()));
          } else if (type === "extra") {
            deck.extra.push(Number(line.trim()));
          } else if (type === "side") {
            deck.side.push(Number(line.trim()));
          }
        });

        return `export default ${JSON.stringify(deck)};`;
      }
    },
  };
}
interface IDECK {
  main: number[];
  extra: number[];
  side: number[];
}
