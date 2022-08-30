import { useContext } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button
				id={item.id}
				onClick={() => deleteFeedback(item.id)}
				className="close"
			>
				<FaTimes color="purple" />
			</button>
			<button className="edit" onClick={() => editFeedback(item)}>
				<FaEdit color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	item: PropTypes.object,
};

export default FeedbackItem;
