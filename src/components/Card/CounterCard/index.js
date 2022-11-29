import PropTypes from "prop-types";

import CountUp from "react-countup";

import Box from "../../Box";
import Typography from "../../Typography";

function CounterCard({ color, count, title, description, ...rest }) {
  return (
    <Box p={2} textAlign="center" lineHeight={1}>
      <Typography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </Typography>
      {title && (
        <Typography variant="h5" mt={2} mb={1}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text">
          {description}
        </Typography>
      )}
    </Box>
  );
}

// Setting default props for the CounterCard
CounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the CounterCard
CounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CounterCard;
