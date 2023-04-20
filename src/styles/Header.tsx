import { CSSProperties } from "react";

export const mainLinksHeaderContainer: CSSProperties = {
  height: "65px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  borderBottom: "1px solid black",
  borderTop: "1px solid black",
  backgroundColor: "#fff",
};

export const mainLink: CSSProperties = {
  width: "90%",
  height: "90%",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "1.25rem",
  color: "inherit",
};

export const celebrationBannerHeader: CSSProperties = {
  position: "relative",
  height: "65px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1B74E4",
};

export const celebrationText: CSSProperties = {
  margin: "0",
  padding: "0",
  fontSize: "1.75rem",
  color: "whitesmoke",
};

export const NavigationContainer: CSSProperties = {
  width: "100%",
  position: "absolute",
  top: "0",
  right: "0",
  zIndex: 1,
};
