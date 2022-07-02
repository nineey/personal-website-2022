import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import styled from 'styled-components';
import {device} from '../../theme/theme';
import Logo from './Logo';

type ToggleTheme = any;

export default function Header(props: ToggleTheme) {
	const {locale, asPath} = useRouter();
	const [isMobile, setIsMobile] = useState(false);
	const logo_size = !isMobile ? '60' : '40';

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
		window.addEventListener('resize', handleResize);
	}, []);
	return (
		<FlexContainer>
			<div className='left'>
				{' '}
				<Link href='/' locale={locale}>
					<a>
						<Logo width={`${logo_size}`} height={`${logo_size}`} />
					</a>
				</Link>
				{/* <div className='menu'>
					<ul>
						<li>
							<Link href='/about' locale={locale}>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/cv' locale={locale}>
								<a>CV</a>
							</Link>
						</li>
					</ul>
				</div> */}
			</div>
			<div className='right'>
				<div className='settings'>
					<div className='lang-select'>
						{locale === 'de' ? (
							<Link href={asPath} locale='en'>
								{isMobile ? <a>EN</a> : <a>English</a>}
							</Link>
						) : (
							<Link href={asPath} locale='de'>
								{isMobile ? <a>DE</a> : <a>Deutsch</a>}
							</Link>
						)}
					</div>
					<DarkModeSwitch
						checked={props.darkThemeOn}
						onChange={props.toggleTheme}
						size={30}
					/>
				</div>
			</div>
		</FlexContainer>
	);
}

const FlexContainer = styled.div`
	max-width: 1240px;
	padding: 2em 2em 1em 2em;
	margin: 0 auto;
	margin-top: 0em;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	@media ${device.tablet} {
		margin-top: 2em;
	}

	.bold {
		font-weight: 700;
	}

	.menu {
		display: inline-block;
		margin-top: 1em;
		margin-left: 2em;
	}

	.menu ul {
		padding: 0;
		display: flex;
	}

	.menu ul li {
		margin-left: 2em;
	}

	.menu ul li a:hover {
		color: #00a2ac;
	}

	.box2 {
		width: 20px;
		height: 20px;
		background-color: red;
	}

	.right {
		align-self: center;
	}

	.settings {
		display: flex;
		align-items: center;
	}

	.lang-select {
		border-right: 1px solid;
		margin-right: 10px;

		a {
			padding-right: 10px;
			text-decoration: none;
			font-size: 1.2em;
		}
	}
`;
