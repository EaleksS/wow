import { FC } from "react";
import styles from "./Logo.module.scss";
import { useNavigate } from "react-router-dom";

export const Logo: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img
        src="https://testoviyvariaent-3v0htncz7-ealekss.vercel.app/static/media/peach1.96a4d263dda263def32e.png"
        alt="logo"
      />
    </div>
  );
};
