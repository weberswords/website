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

	it('renders a post component', () => {
		expect(home.contains(Post));
	})

})


