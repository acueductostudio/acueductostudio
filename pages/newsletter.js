import styled from "styled-components";
import Head from "../components/Head";
import { useEffect, useState } from "react";
import PageClipper from "components/PageClipper";
import PinnedSection from "components/shared/PinnedSection";
import Cookies from "js-cookie/dist/js.cookie";

function Newsletter(props) {
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    props.setTitle("newsletter");
    (function() {
      var ibl = document.createElement("script");
      ibl.type = "text/javascript";
      ibl.async = true;
      ibl.src =
        ("https:" == document.location.protocol ? "https://" : "http://") +
        "invitebox.com/invitation-camp/30455/invitebox-landing.js?hash=" +
        escape(window.location.hash);
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ibl, s);
    })();
  }, [props.locale]);

  const handleChange = event => {
    setEmailValue(event.target.value);
  };

  const saveEmailToCookie = () => {
    console.log("cookieSet");
    Cookies.set("email", emailValue);
  };

  return (
    <PageClipper>
      <Head
        title={"Newsletter"}
        description={"Suscríbete a nuestra newsletter"}
        canonical={"https://acueducto.studio/newsletter"}
        lang={props.lang}
      />
      <PinnedSection title={"newsletter"}>
        <ol>Join our newsletter here: </ol>
        <iframe
          width="820px"
          height="380px"
          frameBorder="0"
          align="middle"
          src="https://www.ref-r.com/campaign_user/p?brandid=29963&campaignid=24982&bid_e=57318F34C22BD0DDC6E2877502255901&t=420&email=&fname="
        ></iframe>
        {/*                   <Subscribe>
<div id="mc_embed_signup">
            <form
              action="https://studio.us19.list-manage.com/subscribe/post?u=c9d7bbb792de4cdbe363fad75&amp;id=434dbf9f3b"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
              onSubmit={saveEmailToCookie}
            >
              {emailValue}
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe</label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                  value={emailValue}
                  onChange={handleChange}
                />
                 <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> 
                 <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_c9d7bbb792de4cdbe363fad75_434dbf9f3b"
                  tabIndex="-1"
                />
              </div> 
                <div>
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </Subscribe> */}
      </PinnedSection>
    </PageClipper>
  );
}
export default React.memo(Newsletter);

const Subscribe = styled.div`
  #mc_embed_signup {
  }
`;
