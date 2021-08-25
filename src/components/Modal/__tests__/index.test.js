import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

afterEach(cleanup)

describe('Modal component', () => {

  it('renders', () => {
    // baseline render component test
    render(<Modal />);
  });

  // snapshot test
  it('matches snapshot DOM node structure', () => {
    // arrange the snapshot - declare variables
    const { asFragment } = render(<Modal />)
    // assert the match
    expect(asFragment()).toMatchSnapshot()
  });

describe('Click Event', () => {
    it('calls onClose handler', () => {
      // arrange: render modal
      // act: simulate click event
      // assert: expected matcher
    });
  })  
})