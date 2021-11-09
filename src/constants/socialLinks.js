import React from "react";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaDribbble,
	FaTwitter,
} from "react-icons/fa";

const data = [
	{
		id: 1,
		icon: <FaFacebookF className="social-icon"></FaFacebookF>,
		url: "https://www.twitter.com",
	},
	{
		id: 2,
		icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
		url: "https://www.twitter.com",
	},
	{
		id: 3,
		icon: <FaDribbble className="social-icon"></FaDribbble>,
		url: "https://www.twitter.com",
	},
	{
		id: 5,
		icon: <FaTwitter className="social-icon"></FaTwitter>,
		url: "https://www.twitter.com",
	},
];
const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className="social-link">
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return (
		<ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
	);
};
