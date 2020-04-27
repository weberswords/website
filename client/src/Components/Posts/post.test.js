import React from 'react';
import { mount } from 'enzyme';
import Post from './post';

describe('post', () => {
	let post;

	beforeAll(() => {
		post = mount(
			<Post 
				title="Title" 
				author="me" 
				body="Some text"
				pid="lasje89w8fhj9w"
				date="Mon, Apr 27, 2020"
			/>);

	})
	
	it('renders title', () => {
		  const expected = "Title";
		  const outputTitle = post.find('#lasje89w8fhj9w').text();
		  expect(outputTitle).toEqual(expected);
	});

	it('renders by line', () => {
		  const expected = "Mon, Apr 27, 2020 | me";
		  const output = post.find('#byLine').text();
		  expect(output).toEqual(expected);
	});

	it('renders body', () => {
		const expected = "Some text";
		const output = post.find('#body').text();
		expect(output).toEqual(expected);
	})

})