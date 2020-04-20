import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Home from './home';

describe('home', () => {
	let home;
	
	beforeAll(() => {
		home = mount(
			<Home />);
	})

	it('renders text', () => {
		const response = "There are no posts."
	
		const expected = "Home";
		const outputTitle = home.find('#homeTitle').text();
		expect(outputTitle).toEqual(expected);
	});

	it('renders no posts message when there are no posts', () => {
		const response = []
		const expected = "There are no posts."
		const output = home.find('#noPosts').text();
		expect(output).toEqual(expected);
	})

})


