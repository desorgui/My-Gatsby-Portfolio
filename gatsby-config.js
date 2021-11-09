module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "positivy-project",
		author: "desorgui",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				collectionTypes: [
					`jobs`,
					`projects`,
					`blogs`,
					`images`,
					`testimonials`,
				],
				singleTypes: [`about`],
				queryLimit: 1000,
			},
		},
	],
};
