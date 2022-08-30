import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
	return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

Card.defaultProps = {
	children: "",
	reverse: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
