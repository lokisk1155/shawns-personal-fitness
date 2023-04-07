interface PageStyles {
  color: string;
  padding: string;
  fontFamily: string;
  display: string;
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
}

interface HeadingStyles {
  marginTop: number;
  marginBottom: number;
  maxWidth: number | string;
}

export const pageStyles: PageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export const headingStyles: HeadingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
