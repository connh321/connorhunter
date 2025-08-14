"use server";
import { ReactElement } from "react";
import { Stack } from "@mui/material";
import "../../scss/globals.scss";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";

const App = (): ReactElement => {
  const Header = dynamic(() => import("@/components/server/header/header"), {
    ssr: true,
  });
  const Hero = dynamic(() => import("@/components/server/hero/hero"), {
    ssr: true,
  });
  const Highlights = dynamic(
    () => import("@/components/server/highlights/highlights"),
    { ssr: true },
  );
  const Footer = dynamic(() => import("@/components/server/footer/footer"), {
    ssr: true,
  });

  return (
    <>
      <Header />
      <Stack component={"main"} className={styles.main} gap={6}>
        <Hero />
        <Highlights />
      </Stack>
      <Footer />
    </>
  );
};

export default App;
