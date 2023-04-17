import React, { useEffect } from "react";
import { HeadFC, PageProps, navigate } from "gatsby";
import { headingStyles, pageStyles } from "../styles/404";
import Navigation from "../components/Navigation/indexNav";

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Navigation />
      <main style={pageStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <p>Sorry 😔, we couldn’t find what you were looking for</p>
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
