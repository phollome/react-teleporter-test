import React from "react";
import { createTeleporter } from "react-teleporter";

const StatusBar = createTeleporter();

function Target() {
  return <StatusBar.Target />;
}

function Content(props) {
  return <StatusBar.Source {...props} />;
}

export { Target as StatusBar, Content as StatusBarContent };
