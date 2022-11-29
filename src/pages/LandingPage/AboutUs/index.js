import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Box from "../../../components/Box";
import Typography from "../../../components/Typography";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import Information from "./sections/Information";
import Team from "./sections/TeamProjects";
import Projects from "./sections/Projects";
import News from "./sections/News";

import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";
import bgImage from "../../../assets/images/bg-about-us.jpg";

const AboutUs = () => {
  return (
    <>
      <Navbar
        routes={routes}
        action={{
          type: "external",
          route: "/donate",
          label: "Donate Now",
          color: "default",
        }}
        transparent
        light
      />
      <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({}) => ` url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
        // sx={{ backgroundImage: `url(${bgImage})` }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <Typography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              S I Y A P A T H A
            </Typography>
            <Typography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              F u n d r a i s i n g F o r T h e H u m a n
            </Typography>
          </Grid>
        </Container>
      </Box>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Projects />
        <News />
      </Card>
      <Box pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </Box>
    </>
  );
};

export default AboutUs;
