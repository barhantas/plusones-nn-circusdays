import { lazy, useState } from "react";
import Input from "../../common/Input";
import { Button } from "../../common/Button";

import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import { SvgIcon } from "../../common/SvgIcon";
import { Col, Divider, Row, Skeleton } from "antd";
import { recommendedJobs } from "../../barishantas-nn-match";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const FindJob = () => {
  const [linkedProfile, setLinkedProfile] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(isLoading);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="nn-flag.png"
        id="mission"
      />

      <div style={{ marginTop: -140, zIndex: 99999, position: "relative" }}>
        <Input
          type="text"
          name="LinkedIn Profile URL"
          placeholder="www.linkedin.com/in/barishantas/"
          value={linkedProfile}
          onChange={(e) => {
            setLinkedProfile(e.target.value);
          }}
        />
        <div style={{ textAlign: "center", marginTop: 12, marginBottom: 12 }}>
          OR
        </div>
        <input
          type="file"
          placeholder="Upload your resume"
          // value={linkedProfile}
          // onChange={(e) => {
          //   setLinkedProfile(e.target.value);
          // }}

          style={{ marginBottom: 40 }}
        />
      </div>

      <Button
        // name="submit"
        onClick={() => {
          setIsLoading(true);
          scrollTo("loading-nn-jobs");
          // Simulate an API call
          setTimeout(() => {
            setIsLoading(false);
            scrollTo("job-matches-nn");
          }, 3000);
        }}
      >
        Start
      </Button>
      {/* <div style={{ padding: 240 }} /> */}

      <div
        id="loading-nn-jobs"
        style={{
          // display: isLoading ? "flex" : "hidden",
          // visibility: isLoading ? "visible" : "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: 40,
          // width: "480px",
          padding: "120px",
          margin: "auto",
          marginTop: "480px",
          marginBottom: "480px",
        }}
      >
        <Skeleton avatar paragraph={{ rows: 2 }} active />
        <Skeleton avatar paragraph={{ rows: 2 }} active />
        <SvgIcon src={"loading-combi.png"} width="360px" height="100%" />
        Loading...
      </div>

      <Row
        id="job-matches-nn"
        style={{ marginTop: 240, marginBottom: 240, paddingTop: 240 }}
      >
        <Col span={12}>
          <div style={{ marginBottom: 80 }} />
          <SvgIcon src={"loading-combi.png"} width="auto" height="240px" />
        </Col>
        <Col span={12}>
          <h6>Look, what we have here!</h6>
          {recommendedJobs.map((job) => {
            return (
              <>
                <div key={job.job_id} style={{ display: "flex" }}>
                  <SvgIcon src="nn-logo.png" width="60px" height="60px" />
                  <div style={{ marginLeft: 16 }}>
                    <h3 style={{ fontSize: 24 }}>{job.title}</h3>
                    <span>
                      {job.company} - {job.city}
                    </span>
                    {/* <Button onClick={() => scrollTo("mission")}>View Details</Button> */}
                  </div>
                </div>
                <Divider />
              </>
            );
          })}
        </Col>
      </Row>

      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default FindJob;
