import { Link as RouterLink } from "react-router-dom";
// ----------------------------------------------------------------------
// MATERIAL - UI
// ----------------------------------------------------------------------
import { Box, Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// ----------------------------------------------------------------------
const classes = makeStyles((theme) => ({
  Container: {
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
  Button: {},
}));
// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Container className={classes.Container}>
      <Container>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <div>
            <Typography variant="h3" paragraph>
              Sorry, page not found!
            </Typography>
          </div>
          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
          <br />
          <div>
            <Box
              component="img"
              src="/static/illustrations/illustration_404.svg"
              sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
            />
          </div>
          <br />
          <div>
            <Button
              className={classes.Button}
              color="primary"
              to="/Home"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Go to Home
            </Button>
          </div>
        </Box>
      </Container>
    </Container>
  );
}