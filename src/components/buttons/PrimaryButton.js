import styled from 'styled-components';
import { Button } from '../buttons/Button'; //we go back, to go into same folder for easier export
import { button_color, button_active_color } from 'styles/colors';

export const PrimaryButton = styled(Button)`
	background-color: ${(props) => props.backgroundColor || button_color};
	transition: 0.3s;
	&:hover {
		background-color: ${(props) =>
			props.backgroundHoverColor || button_active_color};
	}
`;
