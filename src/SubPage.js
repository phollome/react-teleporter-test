import React from "react";
import { StatusBarContent } from "./StatusBar";
import { withRouter } from "react-router-dom";

function SubPage(props) {
  const { history } = props;
  return (
    <>
      <StatusBarContent>
        <p>
          Status bar with&nbsp;
          <input
            type="button"
            onClick={() => history.goBack()}
            value="Back Button"
          />
        </p>
      </StatusBarContent>
      <h1>
        Click here{" "}
        <span role="img" aria-label="point up">
          👆
        </span>
      </h1>
    </>
  );
}

export default withRouter(SubPage);
