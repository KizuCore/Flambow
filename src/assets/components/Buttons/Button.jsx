import PropTypes from "prop-types";
import "./Buttons.css";

function Button({ label, redirectTo }) {
  return (
    <button
      onClick={() => {
        window.open(
          redirectTo,
          "_blank",
          "noopener,noreferrer"
        );
      }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

Button.defaultProps = {
  redirectTo: "#",
};

export default Button;