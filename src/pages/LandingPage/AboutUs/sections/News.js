import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import Box from "../../../../components/Box";
import Typography from "../../../../components/Typography";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

// Images
import group from "../../../../assets/images/group.png";

function News() {
  return (
    <Box component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item  md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <Typography variant="h4">Subscribe us </Typography>
            <Typography variant="body2" color="text" mb={3}>
              Subscribe us to make donatios for latest projects. Be a regular donor with one step. Enter your email below to become a part of us
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Input type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <Button variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <Box position="relative">
              <Box component="img" src={group} alt="group" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default News;
