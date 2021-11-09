import React from "react";
import Title from "./Title";
import services from "../constants/services";
const Services = () => {
	return (
		<section className="section">
			<Title title="services" />
			<div className="section-center services-center">
				{services.map((service) => {
					const { id, icon, title, text } = service;

					return (
						<article key={id} className="service">
							<div className="icon-container"> {icon}</div>
							<h4>{title}</h4>
							<div className="underline"></div>
							<p>{text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
