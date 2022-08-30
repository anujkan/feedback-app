import PropTypes from "prop-types";

const Button = ({ text, version, type, isDisabled }) => {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	text: "Submit",
	version: "primary",
	type: "button",
	isDisabled: false,
};

Button.propTypes = {
	text: PropTypes.string,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
};

export default Button;
