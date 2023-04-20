import { CSSProperties } from "react";

export const KatonahMapStyles: CSSProperties = {
  position: "absolute",
  top: "0",
  right: "0",
  height: "100%",
  width: "100%",
};

export const KatonahInfoContainer: CSSProperties = {
  zIndex: 1,
  position: "relative",
  marginLeft: "3vw",
  height: "300px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "3px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.1)",
};

export const BuisnessInfoContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const KatonahInfoMinimized: CSSProperties = {
  zIndex: 1,
  position: "relative",
  marginLeft: "3vw",
  height: "35px",
  width: "35px",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: "3px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 0px 8px 12px rgba(0, 0, 0, 0.1)",
};
