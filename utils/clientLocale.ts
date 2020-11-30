const clientLocale = ({
  locale,
  fileName,
  callBack,
}: {
  locale: string;
  fileName: string;
  callBack: any;
}) => {
  import(`public/locales/${locale}/${fileName}`).then((newT) => {
    callBack(newT);
  });
  return;
};

export default clientLocale;
