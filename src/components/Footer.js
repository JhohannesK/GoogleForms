import React from 'react';

const Footer = () => {
	return (
		<div className="flex justify-between items-center text-gray-600 text-sm px-12 md:px-0 w-full sm:pt-5 md:w-[30rem] md:pt-5">
			<p>English(United Kingdom)</p>
			<div>
				<ul className="flex items-center justify-center space-x-5">
					<li>Help</li>
					<li>Privacy</li>
					<li>Terms</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
