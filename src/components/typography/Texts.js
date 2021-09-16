import styled, { css, keyframes } from 'styled-components';
import { TypographyBase } from '..';

export const RegularText = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'p',
}))`
	font-size: ${(props) => props.fontSize || '1rem'};
	line-height: ${(props) => props.lineHeight || '1.5rem'};
`;

export const SmallText = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'p',
}))`
	font-size: ${(props) => props.fontSize || '.875rem'};
	line-height: ${(props) => props.lineHeight || '1.25rem'};
`;

export const CaptionText = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'p',
}))`
	font-size: ${(props) => props.fontSize || '.75rem'};
	line-height: ${(props) => props.lineHeight || '1.125rem'};
`;

const fadeIn = keyframes``;

const fadeInAnimation = css`
	animation: ${fadeIn} 2s ease-in;
`;
