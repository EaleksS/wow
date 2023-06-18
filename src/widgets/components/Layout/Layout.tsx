import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Up } from "../../../entities";
import { Header } from "../Header/Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper} id="wrapper">
        <Header />
        <main className={styles.main}>{children}</main>
        <Up />
      </div>
    </>
  );
};
