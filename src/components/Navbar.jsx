import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Icon, ListItemIcon, Stack } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { cityIcon: <LocationCityIcon />, cityName: "Mumbai" },
  { cityIcon: <LocationCityIcon />, cityName: "Mumbai" },
  { cityIcon: <LocationCityIcon />, cityName: "Mumbai" },
];

function DrawerAppBar(props) {
  const { window, details } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2, fontWeight: 500 }}>
        travelofy.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemIcon>{item.cityIcon}</ListItemIcon>
              <ListItemText
                sx={{ my: 1, fontSize: 12 }}
                primary={item.cityName}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: details === "details" ? "#fff" : "transparent",
          boxShadow: "none",
          backgroundImage:
            details === "details"
              ? ""
              : "linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.00) 80.41%)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontSize: { xs: 24, md: 28, lg: 32 },
                fontWeight: 500,
                color: details === "details" ? "#6940FF" : "",
              }}
            >
              travelofy.
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                <Button key={index} sx={{ color: "#fff" }}>
                  <Stack direction="column" alignItems="center" gap="2px">
                    <Icon>{item.cityIcon}</Icon>
                    <Typography sx={{ fontSize: 12 }}>
                      {item.cityName}
                    </Typography>
                  </Stack>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  details: PropTypes.string,
};

export default DrawerAppBar;
