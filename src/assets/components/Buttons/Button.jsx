import PropTypes from "prop-types";

function Button({ label, redirectTo, className }) {
  return (
    <button
      type="button"
      className={`inline-flex w-full items-center justify-center rounded-[20px] border-2 border-[#787fdc] bg-[#787fdc] px-6 py-3 font-newake text-base uppercase leading-none text-white shadow-button transition-all duration-300 hover:bg-white hover:text-[#787fdc] md:w-[420px] md:text-[20px] ${className}`}
      onClick={() => {
        // Ouvre la destination dans un nouvel onglet de manière sécurisée.
        window.open(redirectTo, "_blank", "noopener,noreferrer");
      }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  redirectTo: "#",
  className: "",
};

export default Button;
