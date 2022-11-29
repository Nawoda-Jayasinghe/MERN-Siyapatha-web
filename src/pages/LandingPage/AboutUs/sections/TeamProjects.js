import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "../../../../components/Box";
import Typography from "../../../../components/Typography";
import TeamCard from "../../../../components/Card/TeamCard";
import team1 from "../../../../assets/images/team1.jpg";
import team2 from "../../../../assets/images/team2.jpg";
import team3 from "../../../../assets/images/team3.jpg";
import team4 from "../../../../assets/images/team4.jpg";
import team5 from "../../../../assets/images/team5.jpg";
import team6 from "../../../../assets/images/team6.jpg";

function Team() {
  return (
    <Box
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <Typography variant="h3" color="white">
              Our Projects
            </Typography>
            <Typography variant="body2" color="white" opacity={0.8}>
              We have a set of anual project we execute throughout the year. Below are the main projects out of those
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <TeamCard
                image={team1}
                name="Project Amma"
                position={{ color: "info", label: "Elder care" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <TeamCard
                image={team2}
                name="Project Thuru"
                position={{ color: "info", label: "Environmental" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <TeamCard
                image={team3}
                name="Project Akshi"
                position={{ color: "info", label: "Healthcare" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <TeamCard
                image={team4}
                name="Project Nenasala"
                position={{ color: "info", label: "Educational" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <TeamCard
                image={team5}
                name="Siyapatha Awrudu"
                position={{ color: "info", label: "Children" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <TeamCard
                image={team6}
                name="Project Senehasa"
                position={{ color: "info", label: "Healthcare" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          
          
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
