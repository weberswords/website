import React, { useState, useEffect } from 'react';
import Post from '../Posts/post';

import axios from 'axios';

const Home = props => {
	useEffect(() => {
		axios.get('/api/hello')
		.then(res => setState(res.data))
	}, [])

	const [state, setState] = useState('')

	return(
		<div>
			<h1 id="homeTitle">Home</h1>
			<p>{state}</p>
			<Post />
		</div>
		)
};

export default Home;