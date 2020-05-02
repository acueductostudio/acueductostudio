import Head from "components/Head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import PageClipper from "components/PageClipper";
import SimplePinnedSection from "components/shared/SimplePinnedSection";
import createMarkup from "utils/createMarkup";
import { P } from "components/shared/Dangerously";
import ContactFooter from "components/ContactFooter";

export default function Cookies(props) {
  let t = props.locale.cookies_page;
  let b = t.body;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.lang]);

  return (
    <PageClipper>
      <Head
        title={t.page_title}
        canonical={"https://acueducto.studio/cookies"}
        en_canonical={"https://acueducto.studio/en/cookies"}
        lang={props.lang}
      />
      <SimplePinnedSection title={t.intro.title}>
        <Fade>
          <p dangerouslySetInnerHTML={createMarkup(t.intro.p)} />
          <p>
            {b.p0}
            <Link
              href={props.locale.lang === "en" ? "/en/privacy" : "/privacidad"}
            >
              <a>{b.link0}</a>
            </Link>
            .
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
          <p>{b.p5}</p>
          <h4>{b.subsubtitle6}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p6)} />
          <h3 dangerouslySetInnerHTML={createMarkup(b.subtitle7)} />
          <p>{b.p7}</p>
          <h4>{b.subsubtitle8}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p8)} />
          <h2>{b.title9}</h2>
          <p>{b.p9}</p>
          <h4>{b.subsubtitle10}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p10)} />
          <h4>{b.subsubtitle11}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p11)} />
          <h4>{b.subtitle12}</h4>
          <p dangerouslySetInnerHTML={createMarkup(b.p12)} />
        </Fade>
      </SimplePinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}
