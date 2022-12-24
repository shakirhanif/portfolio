import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import ProjectCards from "../components/ProjectCards";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shakir Hanif</title>
        <meta name="Portfolio" content="Portfolio Shakir" />
        <link rel="icon" href="/assets/shakir_hanif_logo.png" />
      </Head>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <ProjectCards></ProjectCards>
      <Contact></Contact>
    </div>
  );
}
