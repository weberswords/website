import React from 'react';
import { render } from 'enzyme';
import Post from './post';

describe('post', () => {
	let post;

	beforeAll(() => {
		post = render(
			<Post 
				title="Title" 
				author="me" 
				body="Some text"
			/>);

	})
	
	it('renders title', () => {
		  const expected = "Title";
		  const outputTitle = post.find('h1').text();
		  expect(outputTitle).toEqual(expected);
	});

	it('renders author', () => {
		  const expected = "by: me";
		  const output = post.find('#author').text();
		  expect(output).toEqual(expected);
	});

})