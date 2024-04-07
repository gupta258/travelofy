import { Box, Container } from "@mui/material";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = (props) => {
  const { item } = props;

  return (
    <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {item.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              color: "#000",
              " .MuiPaper-root .MuiAccordion-root::before": {
                mb: 2,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                padding: 0,
                fontSize: { xs: 18, md: 20 },
                fontWeight: 600,
                textTransform: "capitalize",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
                "& .MuiAccordionSummary-expandIconWrapper": {
                  color: "#000",
                },
              }}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0, fontSize: { xs: 14, md: 16 } }}>
              {item.desc}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

FaqSection.propTypes = {
  item: PropTypes.array,
};

export default FaqSection;
