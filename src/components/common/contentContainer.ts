import styled from 'styled-components';
import {device} from '../../theme/theme';

export const ContentContainer = styled.div`
	max-width: 1240px;
	padding: 0em 2em 2em 2em;
	margin: 0 auto;

	@media ${device.tablet} {
		padding-top: 2em;
	}
`;
