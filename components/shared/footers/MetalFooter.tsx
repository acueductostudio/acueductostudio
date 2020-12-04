import React from "react";
import FooterNav from "./FooterNav";
import FooterLogoCrop from "./FooterLogoCrop";
import TitleSectionGrid from "components/shared/TitleSectionGrid";

const MetalFooter = () => (
  <>
    <TitleSectionGrid>
      <FooterLogoCrop color="rgba(255,255,255,0.25)" />
    </TitleSectionGrid>
    <FooterNav />
  </>
);

export default React.memo(MetalFooter);