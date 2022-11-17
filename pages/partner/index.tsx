import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import PartnerContainer from "../../domain/partner/container";

const Partner: NextPage = () => {
  return (
    <>
      <Head>
        <title>Partner</title>
      </Head>
      <section id={`Partner`}>
        <PartnerContainer />
      </section>
    </>
  );
};
export default Partner;
