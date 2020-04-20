import React from 'react';

const Post = props => {

	return(
		<div>
			<h2 id={props.pid}>{props.title}</h2>
			<p id="author">by: {props.author}</p>
			<p id="body">
				{props.body}
			</p>
		</div>
		)
};

export default Post;