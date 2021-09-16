import styled from 'styled-components';
import { Button } from '../buttons/Button'; //we go back, to go into same folder for easier export
import { button_color, button_active_color, primary } from 'styles/colors';

export const SecondaryButton = styled(Button)`
	background-color: ${(props) => props.backgroundColor || 'transparent'};
	border-radius: ${(props) => props.borderRadius || '.5rem'};
	color: ${(props) => props.color || button_color};
	transition: ${(props) => props.transition || '.3s'};
	box-shadow: ${(props) =>
		props.boxShadow || `inset 0 0 0 .125rem ${button_color}`};
	&:hover {
		background-color: ${(props) =>
			props.backgroundColorHover || button_active_color};
		color: ${(props) => props.colorHover || primary};
		box-shadow: ${(props) =>
			props.boxShadowHover || `inset 0 0 0 .125rem ${button_active_color}`};
	}
`;
