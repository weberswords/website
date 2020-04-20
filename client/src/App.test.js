import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('app', () => {
	let app;

	beforeAll(() => {
		app = mount(
			<App />);

	})
	it('renders header', () => {
		  const header = app.find('header.App-header');
		  expect(header).toBeTruthy();
	});

})
