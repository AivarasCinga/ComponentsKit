import styled from 'styled-components';
import { black } from 'styles/colors';
export const TypographyBase = styled.p`
	margin: ${(props) => props.margin || ''};
	font-size: ${(props) => props.fontSize || '1rem'};
	font-weight: ${(props) => props.fontWeight || 400};
	line-height: ${(props) => props.lineHeight || '1rem'};
	color: ${(props) => props.color || black};
	text-align: ${(props) => props.textAllign || ''};
	text-decoration: ${(props) => props.textDecoration || ''};
	text-transform: ${(props) => props.textTransform || ''};
`;

export const TypographyBaseBold = styled(TypographyBase).attrs((props) => ({
	fontWeight: props.fontWeight || 700,
}))``;
