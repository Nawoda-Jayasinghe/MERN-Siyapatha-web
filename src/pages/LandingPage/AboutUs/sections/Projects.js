import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "../../../../components/Box";

import CounterCard from "../../../../components/Card/CounterCard";
import sarwodaya from "../../../../assets/images/logos/gray-logos/sar.svg";
import apex from "../../../../assets/images/logos/gray-logos/ap.svg";
import harischandra from "../../../../assets/images/logos/gray-logos/har.svg";
import dakma from "../../../../assets/images/logos/gray-logos/dak.svg";
import dumindu from "../../../../assets/images/logos/gray-logos/dum.svg";
import atlas from "../../../../assets/images/logos/gray-logos/at.svg";

function Projects() {
  return (
    <Box component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <Box
              component="img"
              src={sarwodaya}
              alt="sarwodaya"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box
              component="img"
              src={apex}
              alt="apex"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box
              component="img"
              src={harischandra}
              alt="harischandra"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box
              component="img"
              src={dakma}
              alt="dakma"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box
              component="img"
              src={dumindu}
              alt="dumindu"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Box
              component="img"
              src={atlas}
              alt="atlas"
              width="100%"
              opacity={0.7}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <CounterCard
              count={5235}
              title="Projects"
              description="Volunteering projects all over the country"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CounterCard
              count={3500}
              suffix="+"
              title="Families"
              description="Impacted through our volunteering projects direclty"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CounterCard
              count={300}
              suffix="+"
              title="Coverage"
              description="Covering more than 200 districts arround the country"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
