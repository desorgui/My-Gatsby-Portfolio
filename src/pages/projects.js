import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

const ProjectsPage = ({
	data: {
		allStrapiProjects: { nodes: projects },
	},
}) => {
	return (
		<Layout>
			<SEO title="Projects" />
			<section className="projects-page">
				<Projects projects={projects} title="all projects" />
			</section>
		</Layout>
	);
};
export const query = graphql`
	{
		allStrapiProjects(filter: { featured: { eq: true } }) {
			nodes {
				id
				github
				description
				title
				url
				stack {
					id
					title
				}
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

export default ProjectsPage;
