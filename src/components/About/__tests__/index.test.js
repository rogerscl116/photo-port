import React from 'react';
// import functions from the React Testing Library ( render: renders component; jest creates a simulated DOM to approximate the DOM, cleanup: removes comonents from DOM to prevent memory leaking and data collisions bw tests that could corrupt results)
import { render, cleanup } from '@testing-library/react';
// import the extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect';
// import the component being tested
import About from '..';

// ensures that after each test, we won't have any leftover memory data that could give false results
afterEach(cleanup);

// declares the component being tested
describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About />);
      });

    // second test
    it('matches snapshot DOM node structure', () => {
        // asFragment returns a snapshot of the component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });
  })