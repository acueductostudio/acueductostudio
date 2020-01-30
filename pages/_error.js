import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "components/PageClipper";
import TitleSection from "components/shared/TitleSection";
import ContactFooter from "components/ContactFooter";

export default function Error(props) {
  let t = props.locale.error_page;
  useEffect(() => {
    props.setTitle(
      t.headerTitle + " " + (props.statusCode ? props.statusCode : "Client")
    );
  }, []);
  return (
    <PageClipper>
      <Head
        title={`Acueducto | ${props.statusCode ? props.statusCode : "404"}`}
        lang={props.lang}
      />
      <TitleSection {...t.intro} />
      <ContactFooter/>
    </PageClipper>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
