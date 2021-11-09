import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { FaStar } from "react-icons/fa";
const Testimonial = ({
	id,
	name,
	image,
	position,
	testimonial,
	note,
	index,
}) => {
	const star = <FaStar className="social-icon"></FaStar>;
	return (
		<div
			className={"client-single inactive position-" + (index + 1)}
			data-position={"position-" + (index + 1)}
			onload="activeFirst"
		>
			<div className="client-img">
				{image && (
					<Image
						fluid={image.localFile.childImageSharp.fluid}
						className="testimonial-img"
					/>
				)}
			</div>
			<div className="client-comment">
				<h3>{testimonial}</h3>
				<div className="rate">{star}</div>
			</div>
			<div className="client-info">
				<h3>{name}</h3>
				<p>{position}</p>
			</div>
		</div>
	);
};

Testimonial.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	testimonial: PropTypes.string.isRequired,
	note: PropTypes.number.isRequired,
	image: PropTypes.object.isRequired,
};

export default Testimonial;
