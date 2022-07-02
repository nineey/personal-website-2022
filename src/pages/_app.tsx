import {AppProps} from 'next/app';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentContainer} from '../components/common/contentContainer';
import Header from '../components/common/Header';
import {darkTheme, GlobalStyle, lightTheme} from '../theme/theme';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
	const [darkThemeOn, setDarkTheme] = useState(true);
	const selectedTheme = darkThemeOn ? darkTheme : lightTheme;
	const toggleTheme = () => {
		setDarkTheme(!darkThemeOn ? true : false);
	};
	return (
		<>
			<ThemeProvider theme={selectedTheme}>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} darkThemeOn={darkThemeOn} />
				<ContentContainer>
					<Component {...pageProps} />
				</ContentContainer>
			</ThemeProvider>
		</>
	);
};

export default App;
