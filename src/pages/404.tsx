import React, { useEffect } from "react";
import { Link, HeadFC, PageProps, navigate } from "gatsby";
import { headingStyles, pageStyles } from "../styles/404";

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
