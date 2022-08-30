import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/shared/Card";

const AboutPage = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
			>
				<Card>
					<div className="about">
						<h1>About this Project</h1>
						<p>
							This is a React app to leave feedback for a product or a service
						</p>
						<p>Version: 1.0.0</p>
						<p>
							<Link to="/">Back to Home</Link>
						</p>
					</div>
				</Card>
			</motion.div>
		</AnimatePresence>
	);
};

export default AboutPage;
