import path from "path";
import fs from "fs";

const ssrLocale = ({
  locale,
  fileName,
}: {
  locale: string;
  fileName: string;
}) => {
  const directory = path.join(
    process.cwd(),
    `public/locales/${locale}/${fileName}`
  );
  let fileContents;
  try {
    fileContents = fs.readFileSync(directory, "utf8");
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found.');
      return false;
    } else {
      throw err;
    }
  }
  fileContents = JSON.parse(fileContents);
  return fileContents;
};
export default ssrLocale;
