import React from 'react';

const Post = props => {

	const toLocal = (date) => {
		var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
		const newDate = new Date(Date.parse(date))
		return newDate.toLocaleDateString("en-US", options);
	}

	return(
		<div className="post">
			<h2 id={props.pid}>{props.title}</h2>
			<p id="byLine">{toLocal(props.date)} | {props.author}</p>
			<p id="body">
				{props.body}
			</p>
		</div>
		)
};

export default Post;