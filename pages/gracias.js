import styled from "styled-components";
import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "components/PageClipper";
import Cookies from "js-cookie/dist/js.cookie";
import PinnedSection from "components/shared/PinnedSection";

function Gracias(props) {
  useEffect(() => {
    props.setTitle("gracias");
  }, [props.locale]);

  // const setCookie = () => {
  //   return Cookies.get("email");
  // };
  return (
    <PageClipper>
      <Head
        title={"Gracias por suscribirte"}
        description={"Espera noticias de nosotros pronto"}
        canonical={"https://acueducto.studio/gracias"}
        lang={props.lang}
      />
      <PinnedSection title={"gracias"}>
        <p>gracias por suscribirte </p>
        {/* {setCookie()}
        <img
          src={`https://www.ref-r.com/campaign/t1/settings?bid_e=E8B4779269585E561D693F2479FE12AF&bid=29930&t=420&event=register&email=${setCookie()}&orderID=${setCookie()}`}
        /> */}
      </PinnedSection>
    </PageClipper>
  );
}
export default React.memo(Gracias);

const Subscribe = styled.div`
  #mc_embed_signup {
  }
`;
