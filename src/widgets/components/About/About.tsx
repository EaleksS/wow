import { FC, useState } from "react";
import styles from "./About.module.scss";
import { Text } from "../../../shared";

export const About: FC = (): JSX.Element => {
  const [active, setActive] = useState<string>("convenience");

  return (
    <div className={styles.img}>
      <div className={styles.lines}></div>
      <div className={`container ${styles.about}`}>
        <div className={styles.icons}>
          {[
            "convenience",
            "choose",
            "anonymity",
            "protection",
            "support",
            "functionality",
          ].map((e) => (
            <img
              key={e}
              src={`/img/icon_slider/4-${e}.png`}
              alt="about"
              onMouseEnter={() => setActive(e)}
            />
          ))}
        </div>
        <Text type="h1" center mt="50px" up>
          <span className={active === "convenience" ? styles.active : ""}>
            Удобство
          </span>
          <span className={active === "choose" ? styles.active : ""}>
            ПОЧЕМУ ВЫБИРАЮТ НАС? 2
          </span>
          <span className={active === "anonymity" ? styles.active : ""}>
            Анонимность
          </span>
          <span className={active === "protection" ? styles.active : ""}>
            Защита
          </span>
          <span className={active === "support" ? styles.active : ""}>
            Поддержка
          </span>
          <span className={active === "functionality" ? styles.active : ""}>
            Функционал
          </span>
        </Text>
        <Text type="h3" mt="50px" center fw="300">
          <span className={active === "convenience" ? styles.active : ""}>
            Вам не нужно ничего настраивать, все уже сделано за вас, все просто
            и легко!
          </span>
          <span className={active === "choose" ? styles.active : ""}>
            Надежные и инновационные читы, тестируемые нашей командой. Удобный и
            безопасный софт с цникальными функциями для кажой игры. Поддержка и
            помощь клиентам в решении вопросов.
          </span>
          <span className={active === "anonymity" ? styles.active : ""}>
            Информация о наших клиентах никогда не раскрывается третьим лицам.
          </span>
          <span className={active === "protection" ? styles.active : ""}>
            Уникальная защита от любого античита как в лицензионной версии, так
            и в пиратской версии игр. Большая команда тестировщиков проверяет
            программное обеспечение на наличие банов.
          </span>
          <span className={active === "support" ? styles.active : ""}>
            Опытные специалисты поддержки всегда готовы ответить на ваши вопросы
            и помочь в решении возникающих проблем.
          </span>
          <span className={active === "functionality" ? styles.active : ""}>
            Команда разработчиков занимается созданием индивидуальных
            особенностей чита для каждой игры с авторскими функциями, которые вы
            не найдете в других проектах. Все для того что бы могли в довольно
            насладиться приятным геймплеем в вашей любимой игре
          </span>
        </Text>
      </div>
    </div>
  );
};
