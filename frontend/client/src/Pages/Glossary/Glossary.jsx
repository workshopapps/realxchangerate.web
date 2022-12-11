import React, { useState } from "react";
import { useTheme } from "@mui/material";
import {
  Search,
  Parent,
  Items,
  Box,
  Alphabet,
  Header,
  LeftTop,
  LeftMiddle,
  LeftBottom,
  ImageArround,
  RightTop,
  RightMiddle,
  RightBottom,
  Head,
} from "./GlossaryElement";
import { boxes } from "./GlossaryData";
import { useTranslation } from "react-i18next";
// test
function Glossary() {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const [searchField, setSearchField] = useState("");
  const filteredData = boxes.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const { t } = useTranslation();

  return (
    <>
      <Header style={{ backgroundColor: darkMode ? "#00050C" : "" }}>
        <ImageArround>
          <LeftTop src="/assets/png/8 1.png" alt="" />
          <LeftMiddle src="/assets/png/2 1.png" alt="" />
          <LeftBottom src="/assets/png/7 1.png" alt="" />
          <RightTop src="/assets/png/3 1.png" alt="" />
          <RightMiddle src="/assets/png/4 1.png" alt="" />
          <RightBottom src="/assets/png/5 1.png" alt="" />
        </ImageArround>
        <Head>
          <h1 style={{ color: darkMode ? "#0062FF" : "#00296B" }}>
            {t("glossary_main_title")}
          </h1>
          <h4 style={{ color: darkMode ? "#FAFAFA" : "" }}>
            {t("glossary_sub")}
          </h4>
        </Head>
        <Search>
          <div>
            <img src="/assets/png/search.png" alt="" />
          </div>
          <input
            type="text"
            style={{ color: darkMode ? "#64748B" : "" }}
            onChange={handleChange}
            maxLength={1}
            placeholder="Search"
          />
        </Search>
      </Header>
      <Alphabet style={{ backgroundColor: darkMode ? "#00050C" : "" }}>
        {filteredData.map((b) =>
          b?.items && b?.items?.length ? (
            <h4 style={{ color: darkMode ? "#FCFCFC" : "" }}>{b.name}</h4>
          ) : (
            <h3 style={{ color: darkMode ? "#FCFCFC" : "" }}>{b.name}</h3>
          )
        )}
      </Alphabet>
      <Parent style={{ backgroundColor: darkMode ? "#00050C" : "" }}>
        {filteredData.map((b) =>
          b?.items && b?.items?.length ? (
            <Box>
              <h4 style={{ color: darkMode ? "#0062FF" : "#00296B" }}>
                {b.name}
              </h4>
              <Items>
                {b.items.map((item) => {
                  return (
                    <span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: darkMode ? "#FAFAFA" : "" }}
                      >
                        {item.text}
                      </a>
                    </span>
                  );
                })}
              </Items>
            </Box>
          ) : null
        )}
      </Parent>
    </>
  );
}

export default Glossary;
