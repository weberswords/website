import React from 'react';
import { mount } from 'enzyme';
import Home from './home';
import Post from '../Posts/post';


describe('home', () => {
	let home;

	beforeAll(() => {
		home = mount(
			<Home />);

	})
	it('renders text', () => {
		  const expected = "Home";
		  const outputTitle = home.find('#homeTitle').text();
		  expect(outputTitle).toEqual(expected);
	});

	it('renders a post component when there is data', () => {
		expect(home.contains(Post)).toBeTruthy();
	});

	it('renders no posts message when there are no posts', () => {
		const expected = "There are no posts."
		const output = home.find('#noPosts').text();
		expect(output).toEqual(expected);
	})

})


