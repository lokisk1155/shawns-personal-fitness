import { CSSProperties } from "react";

export const HeaderContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "65px",
  backgroundColor: "#1B74E4",
  paddingRight: "5px",
  paddingLeft: "5px",
};

export const HeaderText: CSSProperties = {
  fontSize: "1.6rem",
  color: "whitesmoke",
};

export const MobileLinksContainer: CSSProperties = {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
};

export const MobileLink: CSSProperties = {
  margin: "0",
  padding: "0",
  textDecoration: "none",
  fontSize: "1.25rem",
  color: "inherit",
};
