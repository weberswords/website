import React, { useState, useEffect } from 'react';
import Post from '../Posts/post';

import axios from 'axios';

const Home = props => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		console.log(`Getting posts...`);
		axios.get('/api/allposts')
		.then(res => setPosts(res.data))
	}, [])

	const renderPosts = (posts) => {
		var postList = [];
		if (posts.length < 1) {
			return "There are no posts.";
		} 
		else {
			// Update this to a map. Idk why it's not working but I'm tired and I'll try again later.
			for (const post of posts) {
			  	console.log(`This post is ${post.title}`);
			  	console.log(`date: ${post.date_created}`)
			  	postList.push(<Post
						pid={post.author}
						title={post.title}
						author={post.author}
						body={post.body}
						date={post.date_created}
					/>)
			}
			return postList;
		}
	}


	return(
		<div id="home" className="full">
			{renderPosts(posts)}
		</div>
		)
};

export default Home;