import React from "react";
import { Col, Container, Panel, Placeholder, Row } from "rsuite";

const Card = (props) => (
  <Panel {...props} bordered header="Card title" style={{ padding: 3 }}>
    <img src={props.image?.url} alt="" />
    <Panel header={props.image?.prompt}>
      <p>
        <small>
          <Placeholder></Placeholder>
        </small>
      </p>
    </Panel>
  </Panel>
);

export default function HeroList(props) {
  const { count = 10, images } = props;

  console.log("count", count);

  return (
    <Container>
      <Row gutter={20}>
        {[...images].map((img, i) => (
          <Col md={6} sm={12}>
            <Card image={img} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
