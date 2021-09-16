import styled from 'styled-components';
import { TypographyBase } from '..';

export const H1 = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'h1',
}))`
	font-size: ${(props) => props.fontSize || '2.5rem'};
	line-height: ${(props) => props.lineHeight || '3.5rem'};
`;

export const H3 = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'h2',
}))`
	font-size: ${(props) => props.fontSize || '2rem'};
	line-height: ${(props) => props.lineHeight || '2.75rem'};
`;

export const H2 = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'h3',
}))`
	font-size: ${(props) => props.fontSize || '1.5rem'};
	line-height: ${(props) => props.lineHeight || '2rem'};
`;

export const H1attrs = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'h1',
	fontSize: props.fontSize || '2.5rem',
	lineHeight: props.lineHeight || '3.5rem',
}))``;

export const H2attrs = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'h2',
	fontSize: props.fontSize || '2rem',
	lineHeight: props.lineHeight || '2.75rem',
}))``;

export const H3attrs = styled(TypographyBase).attrs((props) => ({
	as: props.as || 'h3',
	fontSize: props.fontSize || '1.5rem',
	lineHeight: props.lineHeight || '2rem',
}))``;
