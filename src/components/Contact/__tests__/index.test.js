import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
      render(<Contact />);
    })
    // snapshot test
    it('matches snapshot', () => {
        // asFragment returns a snapshot of the component
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
        // assert value comparison
      });
    })

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
       
    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
