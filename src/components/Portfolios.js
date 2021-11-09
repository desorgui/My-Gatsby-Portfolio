import React from "react";
import Title from "./Title";
import Portfolio from "./Portfolio";
export const Portfolios = ({ images, title }) => {
	return (
		<section className="section">
			<Title title={title} />

			<section className="grid-wrap section">
				<ul className="row grid section-center">
					{images.map((image) => {
						return <Portfolio key={image.id} {...image} />;
					})}
				</ul>
			</section>
		</section>
	);
};
export default Portfolios;
