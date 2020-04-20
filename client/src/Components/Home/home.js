import React, { useState, useEffect } from 'react';
import Post from '../Posts/post';

import axios from 'axios';

const Home = props => {
	useEffect(() => {
		axios.get('/api/allposts')
		.then(res => setPosts(res.data))
	}, [])

	const renderPosts = (posts) => {
		return posts.length < 1 ? "There are no posts." :  "There are posts.";
	}

	const arePosts = (posts) => {
		return posts.length < 1 ? "noPosts" :  "posts";
	}

	const [posts, setPosts] = useState([])

	return(
		<div>
			<h1 id="homeTitle">Home</h1>
			<p id={arePosts(posts)}>
				{renderPosts(posts)}
			</p>
		</div>
		)
};

export default Home;