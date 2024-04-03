import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Fourteen from "../assets/Fourteen.png";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 30,
        pt: { xs: 12, sm: 22, md: 30 },
        pb: { xs: 4, sm: 6, md: 10 },
        bgcolor: "#6940FF",
        position: "relative",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{
            backgroundImage: `url(${Fourteen})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "40px",
            width: "80%",
            position: "absolute",
            top: "-120px",
            py: 4,
            mb: 10,
          }}
        >
          <Typography
            sx={{
              color: "#2E3238",
              fontSize: { xs: 20, sm: 32, md: 48 },
              fontWeight: 600,
              letterSpacing: "-0.32px",
              mb: 1,
            }}
          >
            So What Are You Waiting…
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 14, md: 16 },
              color: "#2E3238",
              width: { xs: "90%", sm: "65%", md: "50%" },
              mb: { xs: 1, sm: 2, md: 3 },
            }}
          >
            Our Priority is Attending to the Demands of Your Clientele,
            developing the, we propel our clients quickly.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#6940FF",
              borderRadius: "32px",
              boxShadow:
                "0px 0.301px 1.505px -0.833px rgba(255, 255, 255, 0.20) inset, 0px 1.144px 5.721px -1.667px rgba(255, 255, 255, 0.20) inset, 0px 5px 25px -2.5px rgba(255, 255, 255, 0.20) inset, 0px -0.482px 0.674px -1px rgba(0, 0, 0, 0.14) inset, 0px -1.831px 2.563px -2px rgba(0, 0, 0, 0.14) inset, 0px -8px 11.2px -3px rgba(0, 0, 0, 0.10) inset",
              padding: {
                xs: "10px 20px 10px 20px",
                md: "20px 30px 20px 30px",
              },
              fontSize: { xs: 14, sm: 16, md: 18 },
              fontWeight: 500,
              color: "#FEFFFE",
              letterSpacing: "0.2px",
            }}
          >
            Contact Now
          </Button>
        </Stack>
      </Box>
      <Container maxWidth="lg">
        <Stack direction="column">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              "& > *": {
                flex: "1 1 auto",
                maxWidth: "50%",
              },
              mb: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Divider sx={{ borderColor: "#F3F3F3" }} />
            <Typography
              sx={{
                fontSize: { xs: 24, md: 28, lg: 32 },
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              travelofy
            </Typography>
            <Divider sx={{ borderColor: "#F3F3F3" }} />
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="35px"
            mb={{ xs: 3, sm: 4, md: 5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_105_50)">
                <path
                  d="M16.033 0C7.169 0 0 7.169 0 16.033C0 24.897 7.169 32.066 16.033 32.066C24.897 32.066 32.066 24.897 32.066 16.033C32.001 7.169 24.832 0 16.033 0ZM20.334 9.841H18.053C16.88 9.841 16.619 10.623 16.619 11.405V12.969H20.138L19.682 16.032H16.619V25.287H13.556V16.032H11.731V12.969H13.621V11.079C13.621 8.602 14.338 6.778 17.075 6.778H20.334V9.841Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_50">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_105_53)">
                <path
                  d="M18.208 13.847C19.404 15.043 19.404 16.983 18.208 18.179C17.012 19.375 15.072 19.375 13.876 18.179C12.68 16.983 12.68 15.043 13.876 13.847C15.072 12.651 17.012 12.651 18.208 13.847ZM23.202 10.558C22.876 9.776 22.29 9.124 21.442 8.798C20.921 8.602 20.334 8.472 19.747 8.472C18.769 8.472 18.444 8.472 16.032 8.472C13.62 8.472 13.295 8.472 12.317 8.537C11.73 8.537 11.144 8.667 10.623 8.863C9.776 9.124 9.124 9.775 8.863 10.557C8.667 11.078 8.537 11.665 8.537 12.251C8.472 13.294 8.472 13.554 8.472 16.031C8.472 18.508 8.472 18.768 8.537 19.746C8.537 20.333 8.667 20.919 8.863 21.441C9.189 22.223 9.775 22.875 10.623 23.201C11.144 23.397 11.731 23.527 12.317 23.527C13.295 23.592 13.555 23.592 16.032 23.592C18.509 23.592 18.769 23.592 19.747 23.527C20.334 23.527 20.92 23.397 21.442 23.201C22.224 22.875 22.876 22.289 23.202 21.441C23.398 20.92 23.528 20.333 23.528 19.746C23.593 18.768 23.593 18.508 23.593 16.031C23.593 13.554 23.593 13.294 23.528 12.316C23.463 11.729 23.398 11.143 23.202 10.556V10.558ZM16.033 20.725C13.426 20.725 11.341 18.639 11.341 16.033C11.341 13.427 13.427 11.341 16.033 11.341C18.64 11.341 20.725 13.427 20.725 16.033C20.725 18.639 18.639 20.725 16.033 20.725ZM20.921 12.187C20.334 12.187 19.813 11.666 19.813 11.079C19.813 10.492 20.334 9.971 20.921 9.971C21.508 9.971 22.029 10.492 22.029 11.079C22.029 11.731 21.508 12.187 20.921 12.187ZM16.033 0C7.169 0 0 7.169 0 16.033C0 24.897 7.169 32.066 16.033 32.066C24.897 32.066 32.066 24.897 32.066 16.033C32.001 7.169 24.832 0 16.033 0ZM25.157 19.813C25.157 20.595 25.027 21.312 24.701 22.029C24.245 23.267 23.267 24.245 22.029 24.701C21.312 24.962 20.53 25.092 19.813 25.157C18.835 25.222 18.51 25.222 16.033 25.222C13.556 25.222 13.231 25.222 12.253 25.157C11.471 25.157 10.754 25.027 10.037 24.701C8.799 24.245 7.821 23.267 7.365 22.029C7.104 21.312 6.974 20.53 6.909 19.813C6.844 18.835 6.844 18.51 6.844 16.033C6.844 13.556 6.844 13.231 6.909 12.253C6.909 11.471 7.039 10.754 7.365 10.037C7.821 8.799 8.799 7.821 10.037 7.365C10.754 7.104 11.536 6.974 12.253 6.909C13.231 6.844 13.556 6.844 16.033 6.844C18.51 6.844 18.835 6.844 19.813 6.909C20.595 6.909 21.312 7.039 22.029 7.365C23.267 7.821 24.245 8.799 24.701 10.037C24.962 10.754 25.092 11.536 25.157 12.253C25.222 13.231 25.222 13.556 25.222 16.033C25.222 18.51 25.222 18.835 25.157 19.813Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_53">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_105_56)">
                <path
                  d="M16.033 0C7.169 0 0 7.169 0 16.033C0 24.897 7.169 32.066 16.033 32.066C24.897 32.066 32.066 24.897 32.066 16.033C32.001 7.169 24.832 0 16.033 0ZM22.876 12.318C22.876 12.448 22.876 12.644 22.876 12.774C22.876 17.662 19.291 23.332 12.839 23.332C10.884 23.332 8.994 22.745 7.43 21.637C7.691 21.702 8.017 21.702 8.277 21.702C9.906 21.702 11.47 21.115 12.644 20.073C11.08 20.008 9.776 18.965 9.32 17.466C9.841 17.596 10.428 17.531 10.949 17.401C9.255 16.945 8.081 15.446 8.081 13.686C8.537 14.012 9.124 14.142 9.71 14.207C8.146 13.034 7.69 10.883 8.602 9.124C10.296 11.47 12.969 12.969 15.901 13.165C15.836 12.904 15.836 12.578 15.836 12.318C15.771 10.363 17.335 8.668 19.29 8.603H19.355C20.333 8.603 21.31 9.059 21.962 9.841C22.744 9.711 23.526 9.385 24.178 8.994C23.917 9.841 23.396 10.558 22.614 11.014C23.331 10.949 23.983 10.753 24.634 10.427C24.178 11.209 23.591 11.796 22.874 12.317L22.876 12.318Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_56">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_105_59)">
                <path
                  d="M16.033 0C7.169 0 0 7.169 0 16.033C0 24.897 7.169 32.066 16.033 32.066C24.897 32.066 32.066 24.897 32.066 16.033C32.001 7.169 24.832 0 16.033 0ZM11.34 24.179H7.43V12.448H11.34V24.179ZM9.711 10.884C9.581 10.884 9.515 10.884 9.385 10.884C8.277 10.949 7.299 10.102 7.234 8.994C7.169 7.886 8.016 6.908 9.124 6.843C9.254 6.843 9.32 6.843 9.45 6.843C10.558 6.778 11.536 7.625 11.601 8.733C11.666 9.841 10.884 10.819 9.711 10.884ZM25.418 24.179H21.508V17.922C21.508 16.358 20.921 15.25 19.553 15.25C18.641 15.25 17.858 15.837 17.533 16.684C17.403 17.01 17.403 17.336 17.403 17.662V24.244H13.493C13.493 24.244 13.558 13.621 13.493 12.513H17.403V14.142C18.12 12.904 19.489 12.122 20.922 12.187C23.464 12.187 25.419 13.881 25.419 17.466V24.179H25.418Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_59">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_105_62)">
                <path
                  d="M14.012 19.031L19.226 16.033L14.012 13.035V19.031ZM16.033 0C7.169 0 0 7.169 0 16.033C0 24.897 7.169 32.066 16.033 32.066C24.897 32.066 32.066 24.897 32.066 16.033C32.001 7.169 24.832 0 16.033 0ZM25.613 20.855C25.352 21.702 24.701 22.354 23.853 22.615C22.289 23.006 16.032 23.006 16.032 23.006C16.032 23.006 9.775 23.006 8.211 22.55C7.364 22.289 6.712 21.638 6.451 20.79C6.19 19.226 6.06 17.597 6.06 15.967C6.06 14.337 6.19 12.774 6.451 11.144C6.712 10.297 7.363 9.58 8.211 9.384C9.775 8.993 16.032 8.993 16.032 8.993C16.032 8.993 22.289 8.993 23.853 9.449C24.7 9.71 25.352 10.361 25.613 11.209C25.874 12.773 26.069 14.402 26.004 16.032C26.004 17.661 25.874 19.225 25.613 20.855Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_62">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Stack>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 14 },
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              mb: 1,
            }}
          >
            © 2024 travelofy.com All rights reserved.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 12 },
              fontWeight: 500,
              color: "white",
              textAlign: "center",
            }}
          >
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
