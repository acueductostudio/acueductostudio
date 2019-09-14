import Head from "next/head";
import Link from "next/link";
import PageClipper from "../components/PageClipper";
import SimplePinnedSection from "../components/SimplePinnedSection";
import createMarkup from "../helpers/createMarkup";
import ContactFooter from "../components/ContactFooter";
import { useEffect } from "react";

export default function Privacy(props) {
  let t = props.locale.privacy_page;
  let b = t.body;
  let f = props.locale.contactfooter;
  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, []);
  return (
    <PageClipper>
      <Head>
        <title>Acueducto | Privacy Policy</title>
      </Head>
      <SimplePinnedSection t={t}>
          <h2>{b.subtitle1}</h2>
          <p>{b.p1}</p>
          <h2>{b.subtitle2}</h2>
          <p>{b.p2}</p>
          <ul dangerouslySetInnerHTML={createMarkup(b.list1)} />
          <h2>{b.subtitle3}</h2>
          <p>{b.p3}</p>
          <ul>
            <li>{b.listItem1}</li>
            <li>
              {b.listItem2}
              <Link href="/cookies">
                <a>{b.listItem2Link}</a>
              </Link>
              )
            </li>
          </ul>
          <h2>{b.subtitle4}</h2>
          <p dangerouslySetInnerHTML={createMarkup(b.p4)} />
          <h2>{b.subtitle5}</h2>
          <ul dangerouslySetInnerHTML={createMarkup(b.list2)} />
          <h2>{b.subtitle6}</h2>
          <p dangerouslySetInnerHTML={createMarkup(b.p6)} />
          <h2>{b.subtitle7}</h2>
          <p>{b.p7}</p>
      </SimplePinnedSection>
      <ContactFooter f={f} />
    </PageClipper>
  );
}