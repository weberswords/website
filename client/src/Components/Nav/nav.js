import React from 'react';

const Nav = props => {

	return(
		<div className="nav">
			<ul>
				<li id="nav-title"><a href="/">webs</a></li>
				<li><a href="/">blog</a></li>
				<li><a href="http://www.github.com/weberswords">github</a></li>
				<li><a href="mailto:webs+contact@websonthewebs.com">contact</a></li>
			</ul>
		</div>
		)
};

export default Nav;