import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Nav from './nav';

describe('nav', () => {
	let nav;
	
	beforeAll(() => {
		nav = mount(
			<Nav />);
	})

	it('renders title', () => {
		  const expected = "webs";
		  const outputTitle = nav.find('#nav-title').text();
		  expect(outputTitle).toEqual(expected);
	});

})


