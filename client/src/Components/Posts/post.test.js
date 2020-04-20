import React from 'react';
import { render } from '@testing-library/react';
import Post from './post';


describe('post', () => {
	
	it('renders text', () => {
		  const { getByText } = render(<Post title="Title" author="me" body="Some text"/>);
		  const linkElement = getByText(/Title/i);
		  expect(linkElement).toBeInTheDocument();
	});

})