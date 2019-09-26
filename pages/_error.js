import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "../components/PageClipper";
import TitleSection from "../components/TitleSection";
import ContactFooter from "../components/ContactFooter";

export default function Error(props) {
  let t = props.locale.error_page;
  let f = props.locale.contactfooter;
  useEffect(() => {
    props.setTitle(
      t.headerTitle + " " + (props.statusCode ? props.statusCode : "Client")
    );
  }, []);
  return (
    <PageClipper>
      <Head
        title={`Acueducto | ${
          props.statusCode ? props.statusCode : "Client error"
        }`}
        lang={props.lang}
      />
      {props.statusCode ? (
        <TitleSection title={t.intro.title} text={t.intro.p} />
      ) : (
        "An error occurred on client"
      )}
      <ContactFooter f={f} />
    </PageClipper>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
