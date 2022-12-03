import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articles, news } from "./staticData";
import CardArticles from "./components/CardArticles";
import Header from "./components/Header";
import NewsBody from "./components/NewsBody";
// import { useSelector } from "react-redux";
import LoaderComponent from "../../components/Loader";

export default function SingleNews() {
  const [data, setData] = useState(news[0]);
  const [loading, setLoading] = useState(true);
  // const { news } = useSelector((state) => state.service);
  const { id } = useParams();

  useEffect(() => {
    // if (news.length > 0 && id < news.length) {
    //   setData(news[parseInt(id) - 1]);
    // }
    setData(news[parseInt(id) - 1]);
  }, [id]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div style={{ borderTop: "1px solid #E2E8F0" }}>
      {loading ? (
        <LoaderComponent />
      ) : (
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
            sx={{ margin: { xs: "0px auto 50px" }, flexDirection: {xs:"column", sm:"row"} }}
          >
            <Box
              display="flex"
              flexDirection="column"
              gap="24px"
              sx={{ margin: {xs:"30px auto", sm: "56px auto" }, width:{xs:"100%", sm:"60%"}}}
            >
              <Header data={data} />
              <NewsBody data={data} />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              sx={{padding:{xs:"40px 22px",md:"56px 32px"}, width:{xs:"100%", sm:"40%"}}}
              backgroundColor="#F8FAFC"
              border="1px solid #CBD5E1"
              gap="16px"
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "24px",

                  color: "#0F172A",
                }}
              >
                Similar article
              </Typography>
        
                {articles.map((a) => (
                  <CardArticles key={a.id} data={a} />
                ))}
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
