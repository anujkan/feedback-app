import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [errMessage, setErrMessage] = useState("");

	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setName(feedbackEdit.item.name);
			setEmail(feedbackEdit.item.email);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleTextChange = (event) => {
		if (text === "") {
			setBtnDisabled(true);
			setErrMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setErrMessage("Text must be at least 10 characters");
			setBtnDisabled(true);
		} else {
			setErrMessage(null);
			setBtnDisabled(false);
		}
		setText(event.target.value);
	};

	const handleEmailChange = (event) => {
		const currVal = event.target.value;
		const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email === "") {
			setBtnDisabled(true);
			setErrMessage(null);
		} else if (email !== "" && !currVal.match(mailFormat)) {
			setErrMessage("Please enter correct Email");
			setBtnDisabled(true);
		} else {
			setErrMessage(null);
			setBtnDisabled(false);
		}
		setEmail(currVal);
	};

	const handleNameChange = (event) => {
		const currVal = event.target.value;
		if (name === "") {
			setBtnDisabled(true);
			setErrMessage(null);
		} else if (name !== "" && !currVal.match(/^[A-Za-z\s]+$/)) {
			setErrMessage("Please enter a Valid Name");
			setBtnDisabled(true);
		} else {
			setErrMessage(null);
			setBtnDisabled(false);
		}
		setName(currVal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newFeedback = {
				name,
				email,
				text,
				rating,
			};
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}
			setBtnDisabled(true);
			setIsSuccess(true);
			setName("");
			setEmail("");
			setText("");
		}
	};

	const handleCloseMessage = () => {
		setIsSuccess(false);
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group-2col">
					<input
						value={email}
						type="text"
						onChange={handleEmailChange}
						placeholder="Enter Email"
					/>
					<input
						value={name}
						type="text"
						onChange={handleNameChange}
						placeholder="Enter Name"
					/>
				</div>
				<div className="input-group">
					<input
						onChange={handleTextChange}
						value={text}
						type="text"
						placeholder="Write a Review"
					/>
					<Button text={"Post"} isDisabled={btnDisabled} type={"submit"} />
				</div>
				{errMessage && <div className="message">{errMessage}</div>}
			</form>
			{isSuccess && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className="success-message"
					>
						<span>Thanks for sharing your Feedback.</span>
						<button
							onClick={handleCloseMessage}
							className="close-message"
							type="button"
						>
							<FaTimes color="purple" />
						</button>
					</motion.div>
				</AnimatePresence>
			)}
		</Card>
	);
};

export default FeedbackForm;
