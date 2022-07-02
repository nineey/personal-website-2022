import {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';
import styled from 'styled-components';
import content from '../i18n_content';
import {device} from '../theme/theme';

const Home: NextPage = () => {
	const {locale} = useRouter();
	return (
		<>
			<Head>
				<title>Nicolas Neeser</title>
			</Head>

			<FlexContainer>
				<StyledText>
					{content.intro_hey[locale]} <br />
					{content.intro[locale]}
				</StyledText>
			</FlexContainer>
			<a href='mailto:hey@nicolasneeser.ch' target='_blank' rel='noreferrer'>
				<StyledPara>&gt; E-Mail</StyledPara>
			</a>
			<br />
			<a
				href='https://linkedin.com/in/nicolasneeser'
				target='_blank'
				rel='noreferrer'>
				<StyledPara>&gt; LinkedIn</StyledPara>
			</a>
		</>
	);
};

export default Home;

const StyledText = styled.h1`
	font-size: 40px;
	font-weight: 600;
	line-height: 1.2;
	margin-top: 2em;

	@media ${device.tablet} {
		font-size: 70px;
		margin-top: 0em;
	}
`;

const StyledPara = styled.a`
	line-height: 1.3;
	font-weight: 400;
	font-size: 1.5em;

	:hover {
		color: orange;
		cursor: pointer;
	}
`;

const ImageWrapper = styled.div`
	margin-right: 3em;
	display: block;
	margin-bottom: 1em;

	@media ${device.tablet} {
		display: inline;
	}
`;

const StyledImage = styled(Image)`
	border-radius: 5px;
`;

const FlexContainer = styled.div`
	margin-top: 1em;
	margin-bottom: 5em;

	@media ${device.tablet} {
		margin-top: 5em;
		display: flex;
	}
`;
