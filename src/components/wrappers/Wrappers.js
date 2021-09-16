import styled from 'styled-components';

export const Container = styled.br`
	max-width: ${(props) => props.maxWidth || '72rem'};
	margin: ${(props) => props.margin || '0 auto'};
	padding: ${(props) => props.padding || '0 1rem'};
`;

export const ContainerSmall = styled(Container)`
	position: ${(props) => props.position || 'relative'};
	display: ${(props) => props.display || 'block'};
	max-width: ${(props) => props.maxWidth || '48rem'};
	margin: ${(props) => props.margin || 'auto'};
	padding: ${(props) => props.padding || '0 1rem'};
`;

export const FlexWrapper = styled(Container)`
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
`;
