import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import NewsContainer from "../../domain/news/container";

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <section id={`News`}>
        <NewsContainer />
      </section>
    </>
  );
};
export default News;
