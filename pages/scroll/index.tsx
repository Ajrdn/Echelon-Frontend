import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import ScrollContainer from "../../domain/scroll/container";

const Scroll: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scroll</title>
      </Head>
      <section id={`Scroll`}>
        <ScrollContainer />
      </section>
    </>
  );
};
export default Scroll;
