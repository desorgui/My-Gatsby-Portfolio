import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	{
		site {
			siteMetadata {
				author
				siteDesc: description

				siteUrl
			}
		}
	}
`;
const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(query);
	const { siteDesc, siteUrl } = site.siteMetadata;
	return (
		<Helmet htmlAttributes={{ lang: "en" }} title={`${title} | Gatsby`}>
			<meta name="description" content={description || siteDesc} />

			{/* twitter cards */}
			<meta name="twitter:description" content={siteDesc} />
			<meta name="twitter:image" content={`${siteUrl}`} />
		</Helmet>
	);
};

export default SEO;
