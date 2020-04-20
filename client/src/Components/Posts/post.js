import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Post = props => {

	return(
		<div>
			<h1>{props.title}</h1>
			<p>by: {props.author}</p>
			<p>
				{props.body}
			</p>
		</div>
		)
};

export default Post;