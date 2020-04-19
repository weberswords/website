import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';
import sinon from 'sinon';


describe('home', () => {

	it('renders text', () => {
		  const { getByText } = render(<Home />);
		  const linkElement = getByText(/Home/i);
		  expect(linkElement).toBeInTheDocument();
	});


})


