import { Box, Container, Grid, Typography } from "@mui/material";
import BenefitsCard from "../Components/BenefitsCard";
import PropTypes from "prop-types";

const BenefitsSection = (props) => {
  const { title, item } = props;

  return (
    <Box sx={{ mt: { xs: 6, sm: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          component="div"
          sx={{
            color: "#000",
            fontSize: { xs: 20, sm: 24, md: 26, lg: 32 },
            fontWeight: 700,
            mb: { xs: "30px", sm: "40px", md: "52px" },
            width: { xs: "85%", lg: "50%" },
          }}
        >
          {title}
        </Typography>
        <Grid container rowSpacing="20px">
          {item.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <BenefitsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

BenefitsSection.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf,
};

export default BenefitsSection;
