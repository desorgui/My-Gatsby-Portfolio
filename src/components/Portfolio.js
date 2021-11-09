import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
const Portfolio = ({ id, title, image }) => {
	return (
		<li>
			<figure>
				{image && (
					<Image
						fluid={image.localFile.childImageSharp.fluid}
						className="port-img"
					/>
				)}
				<div className="project-title">
					<span>{title}</span>
				</div>
			</figure>
		</li>
	);
};

Portfolio.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
};

export default Portfolio;
