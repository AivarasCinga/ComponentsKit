import React from 'react';
import { PrimaryButton, SecondaryButton } from 'components';
import {
	H1attrs,
	H2attrs,
	H3attrs,
	H1,
	H2,
	H3,
	RegularText,
	SmallText,
	CaptionText,
} from 'components';
//import styled from 'styled-component';

const Landing = () => {
	return (
		<div>
			<H1attrs as='p'>Text H1 attr!</H1attrs>
			<H2attrs>Text H2 attr!</H2attrs>
			<H3attrs>Text H3 attr!</H3attrs>
			<H1>Text H1!</H1>
			<H2>Text H2!</H2>
			<H3>Text H3!</H3>
			<RegularText>Regular Text</RegularText>
			<SmallText>Small Text</SmallText>
			<CaptionText>Caption text</CaptionText>
			<PrimaryButton>Mundane button 1</PrimaryButton>
			<SecondaryButton>THINK MEGA SPIN (not)</SecondaryButton>
		</div>
	);
};

export default Landing;
