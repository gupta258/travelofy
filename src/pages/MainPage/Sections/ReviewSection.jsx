import { Box, Container, Typography } from "@mui/material";
import ReviewCarousel from "../../../components/ReviewCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const content = [
  {
    id: 1,
    title: "European Bliss",
    desc: "We had an amazing time. Our trip was perfectly curated as per our needs, budget, and the places we wanted to visit by the Holiday Tribe team. We covered 5 Western European countries in about 3 weeks. One of our most memorable trip!!",
    tag: "Sherin Jacob",
  },
  {
    id: 2,
    title: "European Bliss",
    desc: "We had an amazing time. Our trip was perfectly curated as per our needs, budget, and the places we wanted to visit by the Holiday Tribe team. We covered 5 Western European countries in about 3 weeks. One of our most memorable trip!!",
    tag: "Sherin Jacob",
  },
  {
    id: 3,
    title: "European Bliss",
    desc: "We had an amazing time. Our trip was perfectly curated as per our needs, budget, and the places we wanted to visit by the Holiday Tribe team. We covered 5 Western European countries in about 3 weeks. One of our most memorable trip!!",
    tag: "Sherin Jacob",
  },
  {
    id: 4,
    title: "European Bliss",
    desc: "We had an amazing time. Our trip was perfectly curated as per our needs, budget, and the places we wanted to visit by the Holiday Tribe team. We covered 5 Western European countries in about 3 weeks. One of our most memorable trip!!",
    tag: "Sherin Jacob",
  },
  {
    id: 5,
    title: "European Bliss",
    desc: "We had an amazing time. Our trip was perfectly curated as per our needs, budget, and the places we wanted to visit by the Holiday Tribe team. We covered 5 Western European countries in about 3 weeks. One of our most memorable trip!!",
    tag: "Sherin Jacob",
  },
];

const ReviewSection = (props) => {
  const { title } = props;

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
        <ReviewCarousel content={content} />
      </Container>
    </Box>
  );
};

ReviewSection.propTypes = {
  title: PropTypes.string,
};

export default ReviewSection;
