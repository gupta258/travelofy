import {
  Box,
  Stack,
  Typography,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../../../components/Navbar";
import heroImage from "../../../assets/heroImage.png";

const bgStrip = [
  {
    id: 1,
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <g clipPath="url(#clip0_105_286)">
          <path
            d="M15.4292 5.63406L10.6327 4.90408L8.48851 0.352135C8.42994 0.227506 8.3336 0.126615 8.21458 0.0652895C7.9161 -0.0890138 7.55339 0.0395723 7.40415 0.352135L5.25999 4.90408L0.463502 5.63406C0.331263 5.65384 0.210359 5.71912 0.117792 5.81803C0.00588357 5.93848 -0.0557831 6.10053 -0.0536578 6.26856C-0.0515324 6.4366 0.0142112 6.59688 0.129127 6.71418L3.59945 10.2572L2.77957 15.2602C2.76034 15.3766 2.77264 15.4963 2.81507 15.6057C2.8575 15.7151 2.92836 15.8099 3.01962 15.8793C3.11088 15.9488 3.21888 15.99 3.33138 15.9984C3.44389 16.0068 3.55639 15.982 3.65612 15.9269L7.94633 13.5648L12.2365 15.9269C12.3537 15.9922 12.4897 16.0139 12.62 15.9902C12.9487 15.9308 13.1698 15.6044 13.1131 15.2602L12.2932 10.2572L15.7635 6.71418C15.858 6.61724 15.9203 6.49064 15.9392 6.35216C15.9902 6.00597 15.7598 5.68549 15.4292 5.63406Z"
            fill="#6339FD"
          />
        </g>
        <defs>
          <clipPath id="clip0_105_286">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.446289)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    tag: "rated",
  },
  {
    id: 2,
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <g clipPath="url(#clip0_105_542)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9075 6.84469C14.2693 7.12903 14.3322 7.65291 14.0479 8.0148L9.46458 13.8482C9.32724 14.0229 9.12574 14.1356 8.90491 14.1611C8.68416 14.1867 8.46224 14.1228 8.28869 13.984L6.20536 12.3173C5.84598 12.0298 5.78771 11.5054 6.07522 11.146C6.36273 10.7867 6.88714 10.7284 7.24652 11.0159L8.67341 12.1574L12.7373 6.9851C13.0217 6.62321 13.5456 6.56034 13.9075 6.84469ZM0.892578 9.99992C0.892578 4.93731 4.99664 0.833252 10.0592 0.833252C15.1218 0.833252 19.2259 4.93731 19.2259 9.99992C19.2259 15.0625 15.1218 19.1666 10.0592 19.1666C4.99664 19.1666 0.892578 15.0625 0.892578 9.99992Z"
            fill="#6940FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_105_542">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.0595703)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    tag: "100% Customised Trips",
  },
  {
    id: 3,
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <g clipPath="url(#clip0_105_542)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9075 6.84469C14.2693 7.12903 14.3322 7.65291 14.0479 8.0148L9.46458 13.8482C9.32724 14.0229 9.12574 14.1356 8.90491 14.1611C8.68416 14.1867 8.46224 14.1228 8.28869 13.984L6.20536 12.3173C5.84598 12.0298 5.78771 11.5054 6.07522 11.146C6.36273 10.7867 6.88714 10.7284 7.24652 11.0159L8.67341 12.1574L12.7373 6.9851C13.0217 6.62321 13.5456 6.56034 13.9075 6.84469ZM0.892578 9.99992C0.892578 4.93731 4.99664 0.833252 10.0592 0.833252C15.1218 0.833252 19.2259 4.93731 19.2259 9.99992C19.2259 15.0625 15.1218 19.1666 10.0592 19.1666C4.99664 19.1666 0.892578 15.0625 0.892578 9.99992Z"
            fill="#6940FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_105_542">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.0595703)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    tag: "95% Visa Success Rate",
  },
  {
    id: 4,
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <g clipPath="url(#clip0_105_542)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9075 6.84469C14.2693 7.12903 14.3322 7.65291 14.0479 8.0148L9.46458 13.8482C9.32724 14.0229 9.12574 14.1356 8.90491 14.1611C8.68416 14.1867 8.46224 14.1228 8.28869 13.984L6.20536 12.3173C5.84598 12.0298 5.78771 11.5054 6.07522 11.146C6.36273 10.7867 6.88714 10.7284 7.24652 11.0159L8.67341 12.1574L12.7373 6.9851C13.0217 6.62321 13.5456 6.56034 13.9075 6.84469ZM0.892578 9.99992C0.892578 4.93731 4.99664 0.833252 10.0592 0.833252C15.1218 0.833252 19.2259 4.93731 19.2259 9.99992C19.2259 15.0625 15.1218 19.1666 10.0592 19.1666C4.99664 19.1666 0.892578 15.0625 0.892578 9.99992Z"
            fill="#6940FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_105_542">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.0595703)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    tag: "24x7 Concierge",
  },
];

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "560px",
          maxHeight: "560px", // Set the height to fill the viewport
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${heroImage})`, // Set the background image with linear gradient
          backgroundSize: "cover", // Ensure the image covers the entire box
          backgroundPosition: "center", // Center the background image
          position: "relative", // Set position to relative to allow positioning of Navbar
          display: "flex", // Make the Box a flex container to center Navbar vertically
          flexDirection: "column",
          justifyContent: "space-between", // Center the Navbar vertically
        }}
      >
        <Navbar />
        <Container maxWidth="lg">
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ color: "#fff", mb: 7 }}
            gap={4}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                lineHeight: "46px",
                letterSpacing: "0.822px",
                textShadow: "0px 0px 54.815px #000;",
                width: "60%",
              }}
            >
              {`The world's best experiences curated just for you`}
            </Typography>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search for Eiffel Tower"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ color: "#6940FF", pr: "22px" }}
                  >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "14px",
                border: "1px solid rgba(105, 64, 255, 0.40)",
                boxShadow: "0px 0px 54px 0px rgba(0, 0, 0, 0.30)",
                width: "406px",
                "& .MuiInput-root::before": {
                  display: "none",
                },
                "& .MuiInput-root::after": {
                  display: "none",
                },
                "& .MuiInputBase-root": {
                  fontSize: 14,
                  color: "#000",
                  letterSpacing: 0,
                },
                "& .MuiInputBase-root::placeholder": {
                  color: "#666666",
                },
                "& .MuiInputBase-input": {
                  padding: "19px 22px",
                },
              }}
            />
          </Stack>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#000", py: "14px" }}>
        <Container
          maxWidth="lg"
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {bgStrip.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing="4px"
            >
              {item.id === 1 && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing="4px"
                  sx={{ mr: "4px" }}
                >
                  <Google sx={{ width: 20, height: 20 }} />
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                    4.6
                  </Typography>
                </Stack>
              )}
              {item.svgIcon}
              <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                {item.tag}
              </Typography>
            </Stack>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
