import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	background-color: #101018;
	color: #fff;
	font-size: 1em;
	letter-spacing: 0.2em;
	border: 2px solid #101018;
	border-top-left-radius: 3px;
`;

const FooterPanel = () => (
	<Div className='py-2 text-center'>
		&copy; Satyam &nbsp; {new Date().getFullYear()}
	</Div>
);

export default FooterPanel;
