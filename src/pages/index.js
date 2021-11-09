import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Portfolios from "../components/Portfolios";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";
import Testimonials from "../components/testimonials/Testimonials";
export default ({ data }) => {
	const [value, setValue] = React.useState(0);
	const {
		allStrapiProjects: { nodes: projects },
		allStrapiBlogs: { nodes: blogs },
		allStrapiImages: { nodes: images },
		allStrapiTestimonials: { nodes: testimonials },
	} = data;
	return (
		<Layout>
			<SEO title="Home" description="this is our home page" />
			<div className="section1">
				<Hero />
			</div>
			<div className="section1">
				<Services />
			</div>

			<div className="Section1">
				<Portfolios images={images} title="Portfolio" />
			</div>
			<div className="Section1">
				<Testimonials testimonials={testimonials} title="Testimonial" />
			</div>
			<div className="section1">
				<Jobs />
			</div>
			<div className="section1">
				<Projects projects={projects} title="featured projects" showLink />
			</div>
			<div className="section1">
				<Blogs blogs={blogs} title="latest articles" showLink />
			</div>
		</Layout>
	);
};
export const query = graphql`
	{
		allStrapiImages(filter: { category: { eq: "portfolio" } }) {
			nodes {
				title
				id
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		allStrapiTestimonials {
			nodes {
				name
				id
				position
				testimonial
				note
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		allStrapiProjects(filter: { featured: { eq: true } }) {
			nodes {
				github
				id
				description
				title
				url
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				stack {
					id
					title
				}
			}
		}
		allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
			nodes {
				slug
				content
				desc
				date(formatString: "MMMM Do, YYYY")
				id
				title
				category
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;
