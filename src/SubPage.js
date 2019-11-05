import React from "react";
import { StatusBarContent } from "./StatusBar";
import { useHistory } from "react-router-dom";

function SubPage(props) {
  const history = useHistory();
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

export default SubPage;
