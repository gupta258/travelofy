import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Twenty from "../../../assets/Twenty.png";
import DoneIcon from "@mui/icons-material/Done";

const ContentSection = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Box sx={{ backgroundColor: "white", py: 3, px: 4 }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 700,
                  fontSize: { xs: 20, sm: 24, md: 26, lg: 32 },
                  mb: 1,
                }}
              >
                Glimpse Of Switzerland | FREE FIFA Museum Tickets
              </Typography>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    backgroundColor: "#6940FE",
                    px: 2,
                    py: "6px",
                    borderRadius: "4px",
                  }}
                >
                  4.9/5
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 14,
                    opacity: 0.7,
                  }}
                >
                  {`(326 Reviews)`}
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 14,
                    opacity: 0.7,
                  }}
                >
                  Switzerland
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ backgroundColor: "white", pt: 3, pb: 2, px: 4, mt: 4 }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: 24,
                  mb: 4,
                }}
              >
                Glimpse Of Switzerland Overview
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    textDecorationLine: "underline",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  About the Tour:
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  {`There's a place that strings a distant chord of fascination within, a place that came straight out of an artist’s imagination, Switzerland is indeed a land of bountiful beauty. The snow-covered Swiss Alps and the scenic lakes amidst the mountainous backdrops are something that would captivate your inner being.`}
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 16,
                  }}
                >
                  {`The city of Zurich, famed for being Europe’s largest financial centre, is the gateway to the fantasy land of white-washed mountains and snowy escapades. When you venture out for Mount Titlis on Rotair, you will step into the world of Narnia to which Lucy opened the wardrobe door. Your astonishment doesn’t cease here, wait till you discover Lucerne, a city graced with medieval architecture, snuggled on the edge of Lake Lucerne amidst a snow-capped mountain. A tour to Zurich will involve all the European delights starting from its first Cog railway, cascading Rhine Falls to Zurich’s little surprises like the Swiss National Museum, Zurich Opera house, and Fifa Football Museum, this 5-day tour to Switzerland will give you the best experience you can think of.`}
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    textDecorationLine: "underline",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Quick info:
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Duration:{" "}
                  <span style={{ fontWeight: 400 }}>6 Days, 5 Nights</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Start Point:{" "}
                  <span style={{ fontWeight: 400 }}>Switzerland Airport</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  End Point:{" "}
                  <span style={{ fontWeight: 400 }}>Switzerland Airport</span>
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    textDecorationLine: "underline",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Inclusions:
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Accommodation:{" "}
                  <span style={{ fontWeight: 400 }}>
                    5 nights accommodation in a hotel in Zurich.
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Meals:{" "}
                  <span style={{ fontWeight: 400 }}>
                    Breakfast from day 2 to day 6
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Transfers:{" "}
                  <span style={{ fontWeight: 400 }}>
                    Transfers using Swiss Pass from trains or other public
                    transport as per the itinerary.
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Visa assistance:{" "}
                  <span style={{ fontWeight: 400 }}>
                    It will be provided (Charges are not included)
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Swiss Pass:{" "}
                  <span style={{ fontWeight: 400 }}>
                    5 Days second class continuous Swiss Pass.
                  </span>
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    textDecorationLine: "underline",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Destination Info:
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Official Name:{" "}
                  <span style={{ fontWeight: 400 }}>
                    The Swiss Confederation
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Capital: <span style={{ fontWeight: 400 }}>Bern</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Time Zone: <span style={{ fontWeight: 400 }}>GMT+2</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Plug Type: <span style={{ fontWeight: 400 }}>C and J</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  Currency: <span style={{ fontWeight: 400 }}>Swizz Franc</span>
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 600,
                    textDecorationLine: "underline",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  How to reach?
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 16,
                    mb: 2,
                  }}
                >
                  {`It takes around 7 hours to cover the distance between the two places. A handful of direct flights are available from Mumbai and New Delhi to Zurich. Most flights to Switzerland have at least one layover, usually in European or Middle-Eastern cities like Abu Dhabi, Istanbul, Paris, Frankfurt, Munich, Milan, Dubai, Doha, or London. `}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "white", pt: 3, pb: 2, px: 4, mt: 4 }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 700,
                  fontSize: { xs: 20, sm: 24, md: 26, lg: 32 },
                  mb: 2,
                }}
              >
                Glimpse Of Switzerland Itenary
              </Typography>
              <Stack direction="row" gap={2} alignItems="center" mb={2}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Day 1:
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000" }}
                >
                  Arrival in Zurich | Welcome to the cultural hub of Switzerland
                </Typography>
              </Stack>
              <Stack direction="row" gap={2} alignItems="center" mb={2}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Day 2:
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000" }}
                >
                  Arrival in Zurich | Welcome to the cultural hub of Switzerland
                </Typography>
              </Stack>
              <Stack direction="row" gap={2} alignItems="center" mb={2}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Day 3:
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000" }}
                >
                  Arrival in Zurich | Welcome to the cultural hub of Switzerland
                </Typography>
              </Stack>
              <Stack direction="row" gap={2} alignItems="center" mb={2}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Day 4:
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000" }}
                >
                  Arrival in Zurich | Welcome to the cultural hub of Switzerland
                </Typography>
              </Stack>
              <Stack direction="row" gap={2} alignItems="center" mb={2}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Day 5:
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000" }}
                >
                  Arrival in Zurich | Welcome to the cultural hub of Switzerland
                </Typography>
              </Stack>
              <Stack direction="row" gap={2} alignItems="center" mb={2}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Day 6:
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "#000" }}
                >
                  Arrival in Zurich | Welcome to the cultural hub of Switzerland
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                px: 4,
                pt: 3,
                pb: 3,
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Typography
                sx={{
                  color: "#697488",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: "0.7",
                  mb: "14px",
                }}
              >
                Starts from{" "}
                <span
                  style={{
                    fontSize: 18,
                    textDecorationLine: "line-through",
                    marginLeft: "5px",
                    color: "#000",
                    fontWeight: 500,
                  }}
                >
                  &#8377;8333.3
                </span>
              </Typography>
              <Stack direction="row" alignItems="center">
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  &#8377;6250
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    backgroundColor: "#6940FE",
                    px: 2,
                    py: "2px",
                    borderRadius: "4px",
                    ml: 2,
                  }}
                >
                  20% off
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 14,
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                per Adult
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                sx={{
                  borderColor: "#6940FE",
                  color: "#6940FE",
                  py: "10px",
                  fontWeight: 500,
                  textTransform: "unset",
                }}
              >
                Send an Enquiry
              </Button>
            </Box>
            <Box
              sx={{
                px: 4,
                pt: 3,
                pb: 3,
                mt: 2,
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#000",
                  mb: 1,
                }}
              >
                Got a Question?
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#000",
                  mb: "10px",
                }}
              >
                Our destination expert will be happy to help you resolve your
                queries for this tour
              </Typography>
              <Stack direction="row">
                <Box></Box>
                <Box sx={{ ml: 2 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#000",
                      mb: "4px",
                    }}
                  >
                    +919462676404
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#000" }}
                  >
                    10:30 AM - 8:00 PM (Mon to Sat)
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                p: 1,
                mt: 2,
                borderRadius: "10px",
                borderWidth: 1,
                borderColor: "#6940FE",
                backgroundColor: "#fff",
                boxShadow: "0px 0px 10px 2px rgba(105, 64, 254, 0.30)",
              }}
            >
              <Stack direction="row" alignItems="center">
                <img
                  src={Twenty}
                  alt="image"
                  width={90}
                  height={90}
                  style={{ marginRight: "10px" }}
                />
                <div>
                  <Typography
                    sx={{ fontSize: 16, color: "#6940FE", fontWeight: 600 }}
                  >
                    Bigger Group? Get special offers upto 50% off!
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "#000", fontWeight: 500 }}
                  >
                    We create unforgettable adventures, customised for your
                    group.
                  </Typography>
                </div>
              </Stack>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  bgcolor: "#6940FE",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  mt: 2,
                  py: "12px",
                  textTransform: "unset",
                  letterSpacing: "0.2px",
                }}
              >
                Get a Callback
              </Button>
            </Box>
            <Box
              sx={{
                pt: 3,
                pb: 3,
                mt: 2,
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#fff",
                  py: 2,
                  mb: 2,
                  bgcolor: "#815D8B",
                  textAlign: "center",
                }}
              >
                Why Travelofy
              </Typography>
              <Stack direction="row" sx={{ px: 4, mb: 2 }}>
                <IconButton>
                  <DoneIcon color="#6940FE" />
                </IconButton>
                <Box sx={{ ml: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#000",
                      mb: "4px",
                    }}
                  >
                    Verified Reviews
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#000",
                    }}
                  >
                    25000+ Pictures and Reviews on the.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" sx={{ px: 4, mb: 2 }}>
                <IconButton>
                  <DoneIcon color="#6940FE" />
                </IconButton>
                <Box sx={{ ml: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#000",
                      mb: "4px",
                    }}
                  >
                    Verified Reviews
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#000",
                    }}
                  >
                    25000+ Pictures and Reviews on the.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" sx={{ px: 4 }}>
                <IconButton>
                  <DoneIcon color="#6940FE" />
                </IconButton>
                <Box sx={{ ml: 1 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#000",
                      mb: "4px",
                    }}
                  >
                    Verified Reviews
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#000",
                    }}
                  >
                    25000+ Pictures and Reviews on the.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentSection;
