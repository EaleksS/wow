import { FC } from "react";
import { About, Layout, Preview, Products, Reviews } from "../../widgets";

// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout>
      <Preview />
      <Products />
      <About />
      <Reviews />
    </Layout>
  );
};
