import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { IconButton, Stack } from "@mui/material";

export default function ProductCard(props) {
  const { item } = props;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 340 },
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia sx={{ height: 340 }} title="green iguana" image={item.image} />
      <CardContent
        sx={{
          p: 0,
          pt: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography component="div" sx={{ color: "#7A7A7A", fontSize: 14 }}>
            {item.days}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing="5px"
            component="div"
          >
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
            <Typography
              sx={{ color: "#6339FD", fontSize: 14, fontWeight: 500 }}
            >
              {item.rating}
            </Typography>
            <Typography sx={{ color: "#8E8E8E", fontSize: 12 }}>
              {item.reviews}
            </Typography>
          </Stack>
        </Stack>
        <Typography component="div" sx={{ fontSize: 16, color: "#000" }}>
          {item.name}
        </Typography>
        <Stack
          component="div"
          direction="row"
          alignItems="center"
          spacing="6px"
        >
          <Typography sx={{ color: "#000", fontSize: 18, fontWeight: 600 }}>
            {item.price}
          </Typography>
          <Typography
            sx={{
              color: "#515151",
              fontSize: 14,
              textDecorationLine: "line-through",
            }}
          >
            {item.cuttedPrice}
          </Typography>
          <Typography
            component="div"
            sx={{
              color: "#6339FD",
              fontSize: 9,
              backgroundColor: "#EDECF0",
              p: "5px",
            }}
          >
            {item.offerTag}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          padding: 0,
          mt: "12px",
          "&.MuiCardActions-root>:not(style)~:not(style)": {
            marginLeft: "11px",
          },
        }}
      >
        <IconButton
          sx={{
            "&.MuiIconButton-root": {
              border: 1,
              borderColor: "#6940FF",
              borderRadius: "14px",
              padding: "15.5px 16px 15.5px 15px",
              color: "#6940FF",
            },
          }}
        >
          <CallIcon color="#6940FF" />
        </IconButton>
        <Button
          sx={{
            backgroundColor: "#6940FF",
            marginLeft: 0,
            padding: "14.5px 0",
            borderRadius: "14px",
            border: "1px solid #6940FF",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 0,
          }}
          fullWidth
          variant="contained"
        >
          Request Callback
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
};
