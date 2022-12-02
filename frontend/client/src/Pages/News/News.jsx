import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { GetNews } from "../../redux/features/Reducers/serviceActions";
import HorizontalNewsCard from "./components/HorizontalNewsCard";
import MainNewsCard from "./components/MainNewsCard";
import Loading from "../../components/Loader";
import Selector from "./components/Selector";
import { setLoading } from "../../redux/features/Reducers/servicesReducer";

import { news, stories, articles } from "./staticData";

import StoriesNews from "./components/StoriesNews";
import { dispatch } from "../../redux/store";
import { useSelector } from "react-redux";

export default function News() {
  const {  loading } = useSelector((state) => state.service);
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  // useEffect(() => {
  //   const ip = sessionStorage.getItem("ip");
  //   dispatch(setLoading(true));
  //   if (ip) {
  //     dispatch(GetNews("155.94.247.229"));
  //   }
  // }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="1440px"
          margin="0px auto 40px"
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              width: { xs: "90%", lg: "84%" },
              margin: { xs: "40px auto", sm: "0px auto"},
              gap:{sm :"24px",md:"32px"}
            }}
          >
            <Box display="flex" flexDirection="column" gap="24px">
              <Selector />

              <Box display="flex" flexDirection="row" sx={{gap:{sm :"20px",md:"327x"}}}>
                <MainNewsCard currentNews={news[0]} />

                <Box
                  display="flex"
                  flexDirection="column"
                  backgroundColor="#FAFAFA"
                  borderLeft="1px solid #D4D4D4"
                  borderRadius="4px"
                  padding="20px"
                  sx={{
                    display: { xs: "none", sm:"block" },
                    width:{sm:"60%",md:"50%"}
                  }}
                 
                >
                  <Box display="flex" flexDirection="column" gap="24px">
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "144.02%",
                      }}
                    >
                      Trending News
                    </Typography>

                    {news.slice(0, 4).map((c) => (
                      <HorizontalNewsCard
                        key={c.id}
                        data={c}
                        id={news.indexOf(c)}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap="16px">
              <Typography
                fontSize="24px"
                sx={{
                  fontWeight: "500",
                  lineHeight: "144.02%",
                  color: darkMode ? "#fff" : "#0F172A",
                }}
              >
                Top Stories
              </Typography>
              <Box>
                <Grid container width="100%" spacing="20px">
                  {news.slice(1, 4).map((s) => (
                    <StoriesNews key={s.id} data={s} id={news.indexOf(s) + 1} />
                  ))}
                </Grid>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column"
              sx={{
                width: "100%",
                background: "#FAFAFA",
                borderRadius: "4px",
                display: { xs: "block", sm: "none" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "144.02%",
                  background: "#fff",
                }}
              >
                Trending News
              </Typography>
              <Box
                mt={2}
                sx={{
                  background: "#fff",
                }}
              >
                {news.map((c) => (
                  <HorizontalNewsCard
                    key={news.indexOf(c)}
                    data={c}
                    id={news.indexOf(c) + 1}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
