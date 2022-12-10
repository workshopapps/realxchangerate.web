import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardArticles from "./components/CardArticles";
import Header from "./components/Header";
import NewsBody from "./components/NewsBody";
import { useSelector } from "react-redux";
import LoaderComponent from "../../components/Loader";
import { dispatch } from "../../redux/store";
import { setNews } from "../../redux/features/Reducers/servicesReducer";

export default function SingleNews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { news } = useSelector((state) => state.service);
  const { id } = useParams();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  useEffect(() => {
    const News = JSON.parse(sessionStorage.getItem("news"));
    dispatch(setNews(News));
  }, []);

  useEffect(() => {
    if (news) {
      if (news.length > 0) {
        let currentNews = news.find((ele) => ele.id === id);
        setData(currentNews);
      }
    }
  }, [news, id]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Box
          backgroundColor={darkMode ? "#00050C" : ""}
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin="0px auto"
        >
          <Box
            margin="0px auto"
            sx={{
              width: { xs: "90%", sm: "90%", md: "84%" },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              gap="49px"
              sx={{
                margin: { xs: "0px auto 50px" },
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="24px"
                sx={{
                  margin: { xs: "30px auto", sm: "56px auto" },
                  width: { xs: "100%", sm: "60%" },
                }}
              >
                <Header data={data} />
                <NewsBody data={data} />
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                sx={{
                  padding: { xs: "40px 22px", md: "56px 32px" },
                  width: { xs: "100%", sm: "40%" },
                }}
                backgroundColor={darkMode ? "#000A1B" : "#F8FAFC"}
                border={darkMode ? "1px solid #000A1B" : "1px solid #CBD5E1"}
                gap="16px"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",

                    color: darkMode ? "#FAFAFA" : "#0F172A",
                  }}
                >
                  Similar article
                </Typography>

                {news
                  .filter((ele) => ele.id !== id)
                  .slice(1, 3)
                  .map((a) => (
                    <CardArticles key={a.id} data={a} />
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
