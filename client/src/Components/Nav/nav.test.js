import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Nav from './nav';

describe('nav', () => {
	let nav;
	let expected;
	let output;
	
	beforeAll(() => {
		nav = mount(
			<Nav />);
	})

	it('renders title', () => {
		  expected = "webs";
		  output = nav.find('#nav-title').text();
		  expect(output).toEqual(expected);
	});

	it('renders blog link', () => {
		expected = "blog";
		output = nav.find('li').at(1).text();
		expect(output).toEqual(expected);
	})

	it('renders github link', () => {
		const expectedText = "github";
		const expectedUrl = "http://www.github.com/weberswords";

		const outputText = nav.find('li').at(2).text();
		const outputUrl = nav.find('li').at(2).find('a').props().href;

		expect(outputText).toEqual(expectedText);
		expect(outputUrl).toEqual(expectedUrl);

	})
	it('renders contact link', () => {
		expected = "contact";
		const expectedEmail = "mailto:contact@websonthewebs.com"
		output = nav.find('li').at(3).text();
		const outputEmail = nav.find('li').at(3).find('a').props().href; 

		expect(output).toEqual(expected);
		expect(outputEmail).toEqual(expectedEmail);
	})

})


