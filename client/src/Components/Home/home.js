import React, { useState, useEffect } from 'react';
import Post from '../Posts/post';

const Home = props => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		}
		const fetchData = async () => {
			await fetch('/api/allposts', options)
				.then(response => {
					if (response.ok) {
						response.json().then(json => {
							console.log(`Posts have resutnred: ${json}`)
							setPosts(json)
						})
					}
				});
		};
		fetchData();
	}, []);

	const renderPosts = posts => {
		let allPosts = []
		if (posts.length > 0) {
			posts.map(post => {
				  allPosts.push(<Post
					author={post.userId}
					date={posts.createdAt}
					title={post.title}
					pid={post.id}
					body={post.content}
				/>)
			})
			return allPosts
		} 
		return "There are no posts."
	}

	return(
		<div id="home" className="full">
			{renderPosts(posts)}
		</div>
		)
};

export default Home;