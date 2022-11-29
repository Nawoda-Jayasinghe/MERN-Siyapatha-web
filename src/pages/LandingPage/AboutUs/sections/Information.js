import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "../../../../components/Box";
import InfoCard from "../../../../components/Card/InfoCard";
import BlogCard from "../../../../components/Card/BlogCard";

function Information() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <Box mb={5}>
                  <InfoCard
                    icon="o"
                    title="AID for Children"
                    description="Total Our Volunteers arround the globe"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={5}>
                  <InfoCard
                    icon="ooooo"
                    title="Make Donation"
                    description="People raised arround the country"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={{ xs: 5, md: 0 }}>
                  <InfoCard
                    icon="o"
                    title="Build Home"
                    description="Poor people saved thier lives with us"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={{ xs: 5, md: 0 }}>
                  <InfoCard
                    icon="o"
                    title="Food Campus"
                    description="Covering more than two hundrud district in total"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <BlogCard
              image="https://www.nicepng.com/png/detail/61-613327_join-us-join-with-us.png"
              description="Join with us today, and support a needy person to make a change in thier life tomorrow."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Join Now",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;
