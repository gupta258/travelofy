import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../Components/ProductCard";
import PropTypes from "prop-types";

const ProductsSection = (props) => {
  const { title, item } = props;

  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Typography
          component="div"
          variant="h4"
          sx={{ color: "#000", fontWeight: 700, mb: "52px" }}
        >
          {title}
        </Typography>
        <Grid container rowSpacing={7} columnSpacing={8}>
          {item.map((item, index) => (
            <Grid item key={index}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

ProductsSection.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf,
};

export default ProductsSection;
