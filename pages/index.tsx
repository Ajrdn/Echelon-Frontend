import type { NextPage } from "next";
import Chat from "../components/form/chat";

const Main: NextPage = () => {
  return (
    <section id={`main`}>
      <Chat />
    </section>
  );
};

export default Main;
