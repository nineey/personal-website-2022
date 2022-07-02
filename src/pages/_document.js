import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const styledComponentsSheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props =>
						styledComponentsSheet.collectStyles(<App {...props} />)
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{initialProps.styles}
						{styledComponentsSheet.getStyleElement()}
					</React.Fragment>
				)
			};
		} finally {
			styledComponentsSheet.seal();
		}
	}

	render() {
		return (
			<Html lang='en' dir='ltr'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='<link rel="preconnect" href="https://fonts.googleapis.com">
						<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
						<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">'
						rel='stylesheet'
					/>

					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon-180x180.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/img/favicon-32x32.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
