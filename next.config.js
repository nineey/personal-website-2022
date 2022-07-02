/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true
	},
	i18n: {
		// providing the locales supported by your application
		locales: ['de', 'en'],
		//  default locale used when the non-locale paths are visited
		defaultLocale: 'de'
	}
};
