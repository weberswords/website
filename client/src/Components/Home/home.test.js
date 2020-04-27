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
	
		const outputTitle = home.find('#home').text();
		expect(outputTitle).toEqual(response);
	});

})


