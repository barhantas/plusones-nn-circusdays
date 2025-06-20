import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import { SvgIcon } from "../../common/SvgIcon";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="main-page-1.svg"
        id="intro"
      />
      <p id="journey" />
      <SvgIcon src={"feature-list-white.png"} width="100%" height="100%" />
      <p style={{ margin: "120px 0" }} />
      <SvgIcon src={"guide.png"} width="100%" height="100%" />
      <p id="social" />
      <SvgIcon src={"testimonials.png"} width="100%" height="100%" />
      <SvgIcon src={"last-section.png"} width="100%" height="100%" />
      <p style={{ margin: "120px 0" }} />
    </Container>
  );
};

export default Home;
