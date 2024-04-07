import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Fifthteen from "../../../assets/Fifthteen.png";
import Sixteen from "../../../assets/Sixteen.png";
import Seventeen from "../../../assets/Seventeen.png";
import Eightteen from "../../../assets/Eightteen.png";
import Nineteen from "../../../assets/Nineteen.png";
import FifthteenCopy from "../../../assets/Fifthteen.png";
import SixteenCopy from "../../../assets/Sixteen.png";
import SeventeenCopy from "../../../assets/Seventeen.png";
import EightteenCopy from "../../../assets/Eightteen.png";
import NineteenCopy from "../../../assets/Nineteen.png";
import FifthteenCopies from "../../../assets/Fifthteen.png";
import SixteenCopies from "../../../assets/Sixteen.png";
import SeventeenCopies from "../../../assets/Seventeen.png";
import EightteenCopies from "../../../assets/Eightteen.png";
import NineteenCopies from "../../../assets/Nineteen.png";

const images = [
  Fifthteen,
  Sixteen,
  Seventeen,
  Eightteen,
  Nineteen,
  FifthteenCopy,
  SixteenCopy,
  SeventeenCopy,
  EightteenCopy,
  NineteenCopy,
  FifthteenCopies,
  SixteenCopies,
  SeventeenCopies,
  EightteenCopies,
  NineteenCopies,
];

const HeroSection = (props) => {
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
              width: "280px",
              height: "320px",
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

HeroSection.propTypes = {
  title: PropTypes.string,
};

export default HeroSection;
