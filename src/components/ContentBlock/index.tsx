import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            {id === "intro" ? (
              <video
                src="/img/svg/plusone.mp4"
                controls
                autoPlay
                muted
                style={{
                  width: "100%",
                  maxWidth: 600,
                  display: "block",
                  margin: "40px auto",
                }}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <SvgIcon src={icon} width="100%" height="100%" />
            )}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              {id !== "other-ind-jobs" ? (
                <h6>{t(title)}</h6>
              ) : (
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <h6>{t(title)}</h6>
                  <div
                    style={{
                      marginLeft: "auto",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <SvgIcon
                      src={"crazy-one.jpeg"}
                      width="120px"
                      height="auto"
                    />
                  </div>
                </div>
              )}

              <Content>{t(content)}</Content>
              {id === "other-ind-jobs" && (
                <Button onClick={() => {}}>Join Community</Button>
              )}

              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("journey")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
