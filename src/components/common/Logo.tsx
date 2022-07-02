import React from 'react';
import {useTheme} from 'styled-components';

interface Props {
	width: string;
	height: string;
}

type Theme = any;

export default function Logo(props: Props) {
	const theme: Theme = useTheme();
	return (
		<>
			<svg
				width={props.width}
				height={props.height}
				viewBox='0 0 65 66'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_302_6677)'>
					<g clipPath='url(#clip1_302_6677)'>
						<path
							d='M22.0436 21.9954L43.7465 0.209715H44.8976C56.13 0.209715 65.236 9.39271 65.236 20.7209V65.8065H43.5547V32.0406C43.5547 26.4302 39.0449 21.8817 33.4815 21.8817L22.0436 21.9954L21.8734 66H0V43.6508L22.0436 21.9954Z'
							fill={theme.colors.main}
						/>
						<path
							d='M22.2358 3.8466e-06L0.23584 0L0.235836 22L22.2358 22L22.2358 3.8466e-06Z'
							fill={theme.colors.main}
							transform='rotate(90, 11, 11)'
						/>
					</g>
				</g>
				<defs>
					<clipPath id='clip0_302_6677'>
						<rect width='65' height='66' fill={theme.colors.main} />
					</clipPath>
					<clipPath id='clip1_302_6677'>
						<rect width='65.236' height='66' fill={theme.colors.main} />
					</clipPath>
				</defs>
			</svg>
		</>
	);
}
