import {createGlobalStyle, ThemeProviderProps} from 'styled-components';
import __COLORS from './colors';

export const lightTheme = {
	backgroundColor: __COLORS.PRIMARY,
	colors: {
		main: __COLORS.SECONDARY,
		header: __COLORS.WHITE,
		linkColor: '#ffa500'
		// linkColor: '#ffc700'
	}
};

export const darkTheme = {
	backgroundColor: __COLORS.BLACK,
	colors: {
		main: lightTheme.backgroundColor,
		header: __COLORS.SECONDARY,
		linkColor: '#ffa500'
	}
};

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`
};

export const GlobalStyle = createGlobalStyle<{
	theme: ThemeProviderProps<any>;
}>`

  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Inter', sans-serif;
    background-color: ${(props: ThemeProviderProps<any>) =>
			props.theme.backgroundColor};
      /* background-image: linear-gradient(135deg, rgb(11, 13, 15) 0%, rgb(2, 3, 3) 100%); */

}
::selection {
  background: #ffa500;
}

  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { 
    margin: 0;
  }
  html,body {
    margin: 0;
  }
  body {
    /* line-height: 1.5; */
  }

  h1 {
    font-size: 2.5em;
    font-weight: 200;
  }

  p {
    font-weight: 400;
    font-size: 1.2em;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    color: ${(props: ThemeProviderProps<any>) => props.theme.colors.main};
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  
  blockquote, 
  q {
    quotes: none;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 1em;


  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: " ";
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
