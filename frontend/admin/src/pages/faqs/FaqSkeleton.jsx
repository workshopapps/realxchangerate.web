import React from "react";
import {Stack, Skeleton} from "@mui/material"

function FaqSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", maxWidth: "800px", height: 60 }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", maxWidth: "800px", height: 60 }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", maxWidth: "800px", height: 60 }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", maxWidth: "800px", height: 60 }}
      />
    </Stack>
  );
}

export default FaqSkeleton;
