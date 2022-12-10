import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function Cards({ text, image, color, bg }) {
  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 0, md: 2 },
        border: "0.5px solid #5F626B",
        borderRadius: "1rem",
        flex: { sm: "0 1 300px" },
        bgcolor: bg,
        color: color,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <img src={image} alt="illustration" width={80} height={80} />
        <Typography
          variant="body2"
          sx={{ fontSize: "1.3rem", textAlign: "center" }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
