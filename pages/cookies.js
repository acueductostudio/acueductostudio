import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import PageClipper from "../components/PageClipper";
import SimplePinnedSection from "../components/SimplePinnedSection";
import createMarkup from "../helpers/createMarkup";
import ContactFooter from "../components/ContactFooter";

export default function Cookies(props) {
  let t = props.locale.cookies_page;
  let b = t.body;
  let f = props.locale.contactfooter;
  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, []);
  return (
    <PageClipper>
      <Head>
        <title>Acueducto | Cookie Policy</title>
      </Head>
      <SimplePinnedSection t={t}>
        <Fade>
          <p>
            {b.p0}
            <Link href="/privacy">
              <a>{b.link0}</a>
            </Link>.
          </p>
          <h2>{b.title1}</h2>
          <p>{b.p1}</p>
          <h2>{b.title2}</h2>
          <p>{b.p2}</p>
          <h3>{b.subtitle3}</h3>
          <p>{b.p3}</p>
          <h4>{b.subsubtitle4}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p4)} />
          <h3>{b.subtitle5}</h3>
          <p>{b.p2}</p>
          <h4>{b.subsubtitle6}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p6)} />
          <h3>{b.subtitle7}</h3>
          <p>{b.p7}</p>
          {/* Until we have the mailchimp optout link
        <h4>{b.subsubtitle8}</h4>
        <p dangerouslySetInnerHTML={createMarkup(b.p8)} /> */}
          <h3>{b.subtitle9}</h3>
          <p>{b.p9}</p>
          <h4>{b.subsubtitle10}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p10)} />
        </Fade>
      </SimplePinnedSection>
      <ContactFooter f={f} />
    </PageClipper>
  );
}
