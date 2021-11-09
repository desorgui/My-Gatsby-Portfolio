import React, { useEffect } from "react";
import Title from "../Title";
import Testimonial from "./Testimonial";
export const Testimonials = ({ testimonials, title }) => {
	useEffect(() => {
		const filterBtn = document.querySelectorAll(`.client-single`);
		if (!filterBtn.length) {
			return;
		}

		filterBtn.forEach((btn) => {
			btn.addEventListener(`click`, function (e) {
				e.preventDefault();
				const current = document.querySelector(`.client-single.active`);
				this.classList.add(`active`);
				current.classList.remove(`active`);
			});
		});
	}, []);
	return (
		<section className="section">
			<Title title={title} />
			<div className="section-center testi-wrap testimonials-center">
				{testimonials.map((testimonial, index) => {
					return (
						<Testimonial key={testimonial.id} index={index} {...testimonial} />
					);
				})}
			</div>
		</section>
	);
};
export default Testimonials;
