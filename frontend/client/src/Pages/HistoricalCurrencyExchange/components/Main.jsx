import { Box, Stack, Pagination } from "@mui/material";
import { RowHeaderComponent, RowComponent } from "./Row";
import MobileView from "./MobileView";

const MainComponent = ({ data }) => {
  return (
    <Box
      marginTop="44px"
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="0px"
      display="flex"
      marginBottom="50px"
    >
      <Box
        alignItems="center"
        width="100%"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Box width="100%" display="flex" flexDirection="column">
          <RowHeaderComponent />
          {data.map((val, key) => {
            return (
              <RowComponent
                key={key}
                country={val.currency}
                bank={Math.ceil(val.rate.official_buy)}
                parallel={Math.ceil(val.rate.parallel_buy)}
              />
            );
          })}
        </Box>
      </Box>
      <Box
        display={{ xs: "flex", sm: "none" }}
        width="100%"
        justifyContent="center"
        marginY="auto"
      >
        <MobileView data={data} />
      </Box>

      {data.length > 10 && (
        <Stack
          width="100%"
          alignItems="center"
          justifyContent="center"
          marginTop="30px"
          spacing={2}
        >
          <Pagination
            showFirstButton
            showLastButton
            count={3}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      )}
    </Box>
  );
};

export default MainComponent;
