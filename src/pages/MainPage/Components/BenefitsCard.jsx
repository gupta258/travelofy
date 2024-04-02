import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function BenefitsCard(props) {
  const { item } = props;

  return (
    <Card
      sx={{ maxWidth: 270, backgroundColor: "transparent", boxShadow: "none" }}
    >
      <CardMedia
        sx={{ height: 270, borderRadius: "16px" }}
        title="media"
        image={item.image}
      />
      <CardContent
        sx={{
          p: 0,
          pt: "14px",
          display: "flex",
          flexDirection: "column",
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#000", fontWeight: 500, mb: "14px" }}
        >
          {item.name}
        </Typography>
        <Typography sx={{ color: "#000", fontSize: 16 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

BenefitsCard.propTypes = {
  item: PropTypes.object,
};
