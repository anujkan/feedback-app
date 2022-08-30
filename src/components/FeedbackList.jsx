import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || feedback.length === 0) {
		return <p>No Feedback yet...!!!</p>;
	}

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => {
					return (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }}
						>
							<FeedbackItem item={item} />
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);

	// return (
	// 	<div className="feedback-list">
	// 		{feedback.map((item) => {
	// 			return (
	// 				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
	// 			);
	// 		})}
	// 	</div>
	// );
};

export default FeedbackList;
