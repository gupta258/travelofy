import { Box, Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import PolicyIcon from "../../../assets/PolicyIcon.avif";

const PoliciesSection = (props) => {
  const { item } = props;

  return (
    <Box sx={{ mt: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing="40px"
          columnSpacing="70px"
          justifyContent="space-between"
        >
          {item.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ maxWidth: { xs: "160px", sm: "200px" } }}>
                <img src={PolicyIcon} alt="icon" />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 16 },
                    fontWeight: 500,
                    color: "black",
                    mt: 2,
                    mb: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14 },
                    color: "black",
                    opacity: "0.6",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

PoliciesSection.propTypes = {
  item: PropTypes.array,
};

export default PoliciesSection;
