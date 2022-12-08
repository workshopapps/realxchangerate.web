import { Box } from "@mui/material";
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
          {data.map((val) => {
            return (
              <div key={data.indexOf(val)}>
                {val !== undefined && val !== null && val.rate !== null && (
                  <RowComponent
                    country={val.currency}
                    bank={Math.ceil(val.rate.official_buy)}
                    parallel={Math.ceil(val.rate.parallel_buy)}
                  />
                )}
              </div>
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
    </Box>
  );
};

export default MainComponent;
