import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Post = props => {

	return(
		<div>
			<h1 id={props.pid}>{props.title}</h1>
			<p id="author">by: {props.author}</p>
			<p id="body">
				{props.body}
			</p>
		</div>
		)
};

export default Post;