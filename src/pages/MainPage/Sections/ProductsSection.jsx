import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../Components/ProductCard";
import PropTypes from "prop-types";

const ProductsSection = (props) => {
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
          }}
        >
          {title}
        </Typography>
        <div style={{ overflowX: "auto" }}>
          <Grid
            container
            rowSpacing={7}
            sx={{ display: "flex", flexWrap: "nowrap", pb: 2 }}
          >
            {item.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={index}
                sx={{
                  flex: "0 0 auto",
                  minWidth: "300px",
                  mr: 2,
                }}
              >
                <ProductCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

ProductsSection.propTypes = {
  title: PropTypes.string,
  item: PropTypes.arrayOf,
};

export default ProductsSection;
