import React from 'react';
import './css/footer.css';

const Footer = () => {
    const address = import.meta.env.VITE_ADDRESS;
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
		<footer>
			{/* <div style={inner}> */}
            <div className="grid2-container">
                <div className="grid2-item"> 
                    Address: <br /> {address} <br />
                    Phone: <br /> {import.meta.env.VITE_GUNDO_PHONE}
                </div>
                <div className="grid2-item"> {address}</div>
                <div className="grid2-item"> {address}</div>
            </div>
            
				<div style={textStyle}>© {new Date().getFullYear()} APSATL — All rights reserved</div>
			{/* </div> */}
		</footer>
	);
};

export default Footer;
