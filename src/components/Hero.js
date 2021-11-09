import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
const query = graphql`
	{
		file(relativePath: { eq: "hero-img.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
const Hero = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query);

	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline"></div>
						<h1>i'm Desor</h1>
						<h3>GRAPHICS DESIGNER</h3>
						<p>
							I'm a based web designer and front‑end developer focused on
							crafting clean and user‑friendly experiences, I am passionate
							about building excellent software that improves the lives of those
							around me.
						</p>
						<Link to="/contact" className="btn">
							contact me
						</Link>
						<SocialLinks />
					</div>
				</article>
				<div className="hero-img-container">
					<Image fluid={fluid} className="hero-img" />
				</div>
			</div>
		</header>
	);
};

export default Hero;
