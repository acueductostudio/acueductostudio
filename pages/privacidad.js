import Head from "components/Head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import PageClipper from "components/PageClipper";
import SimplePinnedSection from "components/SimplePinnedSection";
import createMarkup from "utils/createMarkup";
import ContactFooter from "components/ContactFooter";
import { useEffect } from "react";

export default function Privacy(props) {
  let t = props.locale.privacy_page;
  let b = t.body;
  let f = props.locale.contactfooter;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.lang]);

  return (
    <PageClipper>
      <Head
        title={t.page_title}
        canonical={"https://acueducto.studio/privacidad"}
        en_canonical={"https://acueducto.studio/en/privacy"}
        lang={props.lang}
      ></Head>
      <SimplePinnedSection t={t}>
        <Fade>
          <h2>{b.subtitle1}</h2>
          <p>{b.p1}</p>
          <h2>{b.subtitle2}</h2>
          <p>{b.p2}</p>
          <ul dangerouslySetInnerHTML={createMarkup(b.list1)} />
          <h2>{b.subtitle3}</h2>
          <p>{b.p3}</p>
          <ul>
            <li>{b.listItem1}</li>
            <li>{b.listItem2}</li>
            <li>
              {b.listItem3}
              <Link
                href={props.locale.lang === "en" ? "/en/cookies" : "/cookies"}
              >
                <a>{b.listItem3Link}</a>
              </Link>
              )
            </li>
          </ul>
          <h2>{b.subtitle4}</h2>
          <p dangerouslySetInnerHTML={createMarkup(b.p4)} />
          <h2>{b.subtitle5}</h2>
          <p dangerouslySetInnerHTML={createMarkup(b.p5)} />
          <ul dangerouslySetInnerHTML={createMarkup(b.list2)} />
          <h2>{b.subtitle6}</h2>
          <p dangerouslySetInnerHTML={createMarkup(b.p6)} />
          <h2>{b.subtitle7}</h2>
          <p>{b.p7}</p>
        </Fade>
      </SimplePinnedSection>
      <ContactFooter f={f} />
    </PageClipper>
  );
}
