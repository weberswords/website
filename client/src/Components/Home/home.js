import React, { useState } from 'react';
import Post from '../Posts/post';

import axios from 'axios';

const Home = props => {
	const [posts, setPosts] = useState([])

	const getPosts = () => {
		try {
			console.log(`Getting posts...`);
			axios.get('/api/allposts')
				.then(res => setPosts(res.data))
			console.log(res.data)
		} catch (e) {
			console.log(`😢 Axios request failed: ${e}`);
		}
	}

	const renderPosts = (posts) => {
		getPosts();
		if (posts.length < 1) {
			return "There are no posts.";
		} 
		else {
			console.log(`The title is ${posts[0].title}.`);
			// Update this to a map. Idk why it's not working but I'm tired and I'll try again later.
			for (const post of posts) {
			 return <Post
						pid={post.author}
						title={post.title}
						author={post.author}
						body={post.body}
					/>
			}
		}
	}

	const arePosts = (posts) => {
		return posts.length < 1 ? "noPosts" :  "posts";
	}

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