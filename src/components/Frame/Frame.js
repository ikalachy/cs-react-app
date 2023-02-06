import React, { useEffect, useState } from "react";
import { Container, Content, DOMHelper } from "rsuite";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import BackgroundAnimation from "./background";

const { getHeight, on } = DOMHelper;

// export interface FrameProps {
//   navs: NavItemData[];
//   children?: React.ReactNode;
// }

const Frame = (props) => {
  const [windowHeight, setWindowHeight] = useState(getHeight(window));

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, "resize", () =>
      setWindowHeight(getHeight(window))
    );

    return () => {
      resizeListenner.off();
    };
  }, []);

  return (
    <Container className="frame">
      <Container className="">
        <Header />
        <Content>
          <Outlet />
        </Content>
        <BackgroundAnimation />
      </Container>
    </Container>
  );
};

export default Frame;
