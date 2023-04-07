import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { headingStyles, pageStyles } from "./styles/404";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
      <br />
      <br />
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
