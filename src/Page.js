import React from "react";
import { Link } from "react-router-dom";
import { StatusBarContent } from "./StatusBar";

function Page() {
  return (
    <>
      <StatusBarContent>
        <p>Status bar</p>
      </StatusBarContent>
      <h1>
        <span role="img" aria-label="wave">
          👋 React Teleporter
        </span>
      </h1>
      <Link to="/subpage">to subpage</Link>
    </>
  );
}

export default Page;
