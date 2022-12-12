import { t } from "i18next";
import React from "react";
import { List } from "../style/Privacy.styled";
const Introduction = () => {
  return (

    <section style={{ marginBlock: "70px" }}>
      <h2 style={{ marginBottom: "18px" }}>{t("introduction_title")}</h2>
      <div>
        <p>{t("intro_greeting")}</p>
        <p>{t("intro_text")}</p>
        <div>
          <p>{t("intro_list_text")}</p>
          <List>
            <li>{t("intro_list1")}</li>
            <li>{t("intro_list2")}</li>
            <li>{t("intro_list3")}</li>
          </List>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
