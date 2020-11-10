import Head from "components/Head";
import Link from "next/link";
import PageClipper from "components/PageClipper";
import SimplePinnedSection from "components/shared/PinnedSections/SimplePinnedSection";
import createMarkup from "utils/createMarkup";
import ContactFooter from "components/ContactFooter";
import { useEffect } from "react";
import { P, Ul, Li } from "components/shared/Dangerously";

export default function Privacy(props) {
  let t = props.locale.privacy_page;
  let b = t.body;

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
      <SimplePinnedSection title={t.intro.title}>
        <P>{t.intro.p}</P>
        <h2>{b.subtitle1}</h2>
        <p>{b.p1}</p>
        <h2>{b.subtitle2}</h2>
        <p>{b.p2}</p>
        <Ul>{b.list1}</Ul>
        <h2>{b.subtitle3}</h2>
        <p>{b.p3}</p>
        <ul>
          <Li>{b.listItem1}</Li>
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
        <P>{b.p4}</P>
        <h2>{b.subtitle5}</h2>
        <P>{b.p5}</P>
        <Ul>{b.list2}</Ul>
        <h2>{b.subtitle6}</h2>
        <P>{b.p6}</P>
        <h2>{b.subtitle7}</h2>
        <p>{b.p7}</p>
      </SimplePinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}
