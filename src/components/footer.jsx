import React from 'react';

const Footer = () => {
	const outer = {
		width: '100%',
		background: 'rgba(255,255,255,0.95)',
		boxShadow: '0 -6px 18px rgba(0,0,0,0.06)',
		marginTop: '3rem',
	};

	const inner = {
		maxWidth: '1200px',
		margin: '0 auto',
		padding: '1rem 1.25rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const textStyle = {
		color: '#333',
		fontSize: '0.95rem',
	};

	return (
		<footer style={outer}>
			<div style={inner}>
				<div style={textStyle}>© {new Date().getFullYear()} APSATL — All rights reserved</div>
			</div>
		</footer>
	);
};

export default Footer;
