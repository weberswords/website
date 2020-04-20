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
			/>);

	})
	
	it('renders title', () => {
		  const expected = "Title";
		  const outputTitle = post.find('#lasje89w8fhj9w').text();
		  expect(outputTitle).toEqual(expected);
	});

	it('renders author', () => {
		  const expected = "by: me";
		  const output = post.find('#author').text();
		  expect(output).toEqual(expected);
	});

	it('renders body', () => {
		const expected = "Some text";
		const output = post.find('#body').text();
		expect(output).toEqual(expected);
	})

})