import React from "react";
import { Nav, initializeIcons } from "@fluentui/react";

import { useDispatch } from "react-redux";

const navigationStyles = {
  root: {
    height: "100%",
    width: "16em",
    boxSizing: "border-box",
    overflowY: "auto",
    paddingTop: "10em",
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
};

const links = [
  {
    links: [
      {
        name: "Dashboard",
        key: "key1",
        url: "/",
        iconProps: {
          iconName: "News",
          styles: {
            root: {
              fontSize: 30,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "My Account",
        key: "key2",
        url: "/",
        iconProps: {
          iconName: "AccountManagement",
          styles: {
            root: {
              fontSize: 30,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Settings",
        key: "key3",
        url: "/",
        iconProps: {
          iconName: "Settings",
          styles: {
            root: {
              fontSize: 30,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Logout",
        key: "key4",
        url: "/",
        iconProps: {
          iconName: "Leave",
          styles: {
            root: {
              fontSize: 30,
              color: "#106ebe",
            },
          },
        },
      },
    ],
  },
];

const Navigation = () => {
  const dispatch = useDispatch();

  function _onLinkClick(ev, item) {
    if (item && item.name === "Logout") {
    } else {
      ev.preventDefault();
      if (item && item.name === "Dashboard") {
        dispatch({ type: "dashboard" });
      }
      if (item && item.name === "My Account") {
        dispatch({ type: "account" });
      }
      if (item && item.name === "Settings") {
        dispatch({ type: "settings" });
      }
    }
  }

  initializeIcons();
  return (
    <Nav
      onLinkClick={_onLinkClick}
      groups={links}
      selectedKey="key1"
      styles={navigationStyles}
    />
  );
};

export default Navigation;
