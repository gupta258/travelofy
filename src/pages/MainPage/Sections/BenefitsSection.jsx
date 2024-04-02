import { Box, Container, Grid, Typography } from "@mui/material";
import BenefitsCard from "../Components/BenefitsCard";
import PropTypes from "prop-types";

const BenefitsSection = (props) => {
  const { title, item } = props;

  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Typography
          component="div"
          variant="h4"
          sx={{ color: "#000", fontWeight: 700, mb: "52px", width: "60%" }}
        >
          {title}
        </Typography>
        <Grid container spacing="20px">
          {item.map((item, index) => (
            <Grid item key={index}>
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
