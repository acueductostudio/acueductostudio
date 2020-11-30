import path from "path";
import fs from "fs";

const ssrLocale = ({
  locale,
  fileName,
  oneLang,
}: {
  locale: string;
  fileName: string;
  oneLang?: string;
}) => {
  const directory = path.join(
    process.cwd(),
    `public/locales/${oneLang ? oneLang : locale}/${fileName}`
  );
  const v = fs.readFileSync(directory, "utf8");
  const x = JSON.parse(v);
  return x;
};
export default ssrLocale;
