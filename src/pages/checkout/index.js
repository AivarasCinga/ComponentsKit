import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { primary } from 'styles/colors';
import { useRouter } from 'apis/history';

import { useQuery } from 'styles/breakpoints';

import {
	Button,
	Images,
	PrimaryButton,
	TypographyBase,
	TypographyBaseBold,
} from 'components';

const Checkout = () => {
	const { isMobile, isTablet } = useQuery();
	const { goToLanding } = useRouter();

	return (
		<SectionWrapper>
			checkout <TypographyBase>Lol</TypographyBase>{' '}
			<TypographyBaseBold>KEKW</TypographyBaseBold>
			{isMobile && <Button>Click</Button>}
			<Images src='lp_image'></Images>
			{isTablet && (
				<Link to='/'>
					<PrimaryButton onClick={goToLanding}>Click me!</PrimaryButton>
				</Link>
			)}
			<PrimaryButton onClick={goToLanding}>Click me!</PrimaryButton>
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	margin: 3rem 0;
	padding: 2rem 0;
	background-color: ${primary};
`;

export default Checkout;
