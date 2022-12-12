import React from "react";
import { Link } from "react-router-dom";
import { List } from "../style/Privacy.styled";
import { useTranslation } from "react-i18next";

const PersonalData = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <h2>{t("what_personal_data-title")}</h2>
        <div>
          <p>{t("what_personal_data_text1")}</p>
          <p>{t("what_personal_data_text2")}</p>
          <p>{t("what_personal_data_text3")}</p>

          <List>
            <li>{t("what_personal_data_list1")}</li>
            <li>{t("what_personal_data_list2")}</li>
            <li>{t("what_personal_data_list3")}</li>
            <li>{t("what_personal_data_list4")}</li>
          </List>

          <div>
            <p>{t("what_personal_data_text4")}</p>
            <p>{t("what_personal_data_text5")}</p>

            <List>
              <li>{t("what_personal_data_list5")}</li>
              <li>{t("what_personal_data_list6")}</li>
              <li>{t("what_personal_data_list7")}</li>
              <li>{t("what_personal_data_list8")}</li>
              <li>{t("what_personal_data_list9")}</li>
            </List>
          </div>

          <div>
            <p>{t("what_personal_data_text6")}</p>

            <List>
              <li>{t("what_personal_data_list10")}</li>
              <li>{t("what_personal_data_list11")}</li>
              <li>{t("what_personal_data_list12")}</li>
            </List>
          </div>

          <div>
            <p>{t("what_personal_data_addtional_text")}</p>
            <p>{t("what_personal_data_addtional_text2")}</p>
            <p>{t("what_personal_data_addtional_text3")}</p>
            <p>{t("what_personal_data_addtional_text4")}</p>

            <p>{t("what_personal_data_special_categories_text")}</p>
            <div>
              <p>{t("what_personal_data_special_categories_text2")}</p>
              <p>{t("what_personal_data_special_categories_text3")}</p>
            </div>
            <p>{t("what_personal_data_special_categories_text4")}</p>
            <p>{t("what_personal_data_special_categories_text5")}</p>
            <p>{t("what_personal_data_special_categories_text6")}</p>
            <p>{t("what_personal_data_special_categories_text7")}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>{t("process_personal_data_title")}</h2>
        <div>
          <p>{t("process_personal_data_text")}</p>
          <p>{t("process_personal_data_text2")}</p>

          <List>
            <li>{t("process_personal_data_list")}</li>
            <li>{t("process_personal_data_list2")}</li>
            <li>{t("process_personal_data_list3")}</li>
          </List>

          <p>{t("process_personal_data_text3")}</p>
          <p>{t("process_personal_data_text4")}</p>

          <div>
            <h3>{t("change_of_purpose_title")}</h3>
            <p>{t("change_of_purpose_text")}</p>
            <p>{t("change_of_purpose_text2")}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>{t("share_personal_data_title")}</h2>
        <div>
          <p>{t("share_personal_data_text")}</p>
          <p>{t("share_personal_data_text2")}</p>

          <List>
            <li>{t("share_personal_data_list")}</li>
            <li>{t("share_personal_data_list2")}</li>
          </List>

          <p>
            {t("link_description")}{" "}
            <Link to="/partnerships">{t("partnership_page")}</Link>{" "}
            {t("for_more_info")}
          </p>
          <p>{t("external_recipient_text")}</p>
          <p>{t("external_recipient_text2")}</p>

          <List>
            <li>{t("external_recipient_list")}</li>
            <li>{t("external_recipient_list2")}</li>
            <li>{t("external_recipient_list3")}</li>
          </List>

          <p>{t("external_recipient_text3")}</p>
        </div>
      </section>

      <section>
        <h2>{t("transfer_data_title")}</h2>
        <div>
          <p>{t("transfer_data_text")}</p>
          <p>{t("transfer_data_text2")}</p>

          <List>
            <li>{t("transfer_data_list")}</li>
            <li>{t("transfer_data_list2")}</li>
          </List>
        </div>
      </section>

      <section>
        <h2>{t("retain_personal_data_title")}</h2>
        <div>
          <p>{t("retain_personal_data_text")}</p>
          <p>{t("retain_personal_data_text2")}</p>
          <p>{t("retain_personal_data_text3")}</p>
        </div>
      </section>

      <section>
        <h2>{t("personal_data_rights_title")}</h2>
        <div>
          <p>{t("personal_data_rights_text")}</p>
          <List>
            <li>{t("personal_data_rights_list")}</li>
            <li>{t("personal_data_rights_list2")}</li>
            <li>{t("personal_data_rights_list3")}</li>
            <li>{t("personal_data_rights_list4")}</li>
            <li>{t("personal_data_rights_list5")}</li>
            <li>{t("personal_data_rights_list6")}</li>
            <li>{t("personal_data_rights_list7")}</li>
            <li>{t("personal_data_rights_list8")}</li>
          </List>

          <p>
            {t("personal_data_rights_email_text")}{" "}
            <a href="mailto:privacyrequests@StreerRates.io">
              privacyrequests@StreerRates.io
            </a>
            . {t("personal_data_rights_email_text2")}
          </p>
          <p>{t("personal_data_rights_text2")}</p>
          <p>{t("personal_data_rights_text3")}</p>
        </div>
      </section>
    </>
  );
};

export default PersonalData;
