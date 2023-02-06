import React from "react";
import { IconButton } from "rsuite";
import ArrowLeftLine from "@rsuite/icons/ArrowLeftLine";
import ErrorPage from "../components/ErrorPage";

const Error404Page = () => (
  <ErrorPage code={404}>
    <p className="error-page-title">Oops… You just found an error page</p>
    <p className="error-page-subtitle text-muted ">
      We are sorry but the page you are looking for was not found
    </p>
    <IconButton icon={<ArrowLeftLine />} appearance="primary" href="/">
      Take me home
    </IconButton>
  </ErrorPage>
);

export default Error404Page;
