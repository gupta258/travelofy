import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import One from "../../../assets/One.png";
import Two from "../../../assets/Two.png";
import Three from "../../../assets/Three.png";
import Four from "../../../assets/Four.png";
import Five from "../../../assets/Five.png";
import Six from "../../../assets/Six.png";
import Seven from "../../../assets/Seven.png";
import Eight from "../../../assets/Eight.png";
import OneCopy from "../../../assets/OneCopy.png";
import TwoCopy from "../../../assets/TwoCopy.png";
import ThreeCopy from "../../../assets/ThreeCopy.png";
import FourCopy from "../../../assets/FourCopy.png";
import FiveCopy from "../../../assets/FiveCopy.png";
import SixCopy from "../../../assets/SixCopy.png";
import SevenCopy from "../../../assets/SevenCopy.png";
import EightCopy from "../../../assets/EightCopy.png";

const images = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  OneCopy,
  TwoCopy,
  ThreeCopy,
  FourCopy,
  FiveCopy,
  SixCopy,
  SevenCopy,
  EightCopy,
];

const FeaturedSection = (props) => {
  const { title } = props;

  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1.1) % (images.length / 2));
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ mt: { xs: 6, sm: 8, md: 10 } }}>
      {title && (
        <Container
          maxWidth="lg"
          sx={{ mb: { xs: "30px", sm: "40px", md: "52px" } }}
        >
          <Typography
            sx={{
              color: "#000",
              fontWeight: 700,
              fontSize: { xs: 20, sm: 24, md: 26, lg: 32 },
            }}
          >
            {title}
          </Typography>
        </Container>
      )}
      <Box
        sx={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          animation: "$marquee 20s linear infinite",
          "@keyframes marquee": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: `translateX(-50%)`,
            },
          },
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            style={{
              width: "184px",
              height: "240px",
              marginRight: "12px",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(${-scrollIndex * 100}%)`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

FeaturedSection.propTypes = {
  title: PropTypes.string,
};

export default FeaturedSection;
