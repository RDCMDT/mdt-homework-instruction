import React from 'react';
// import {setupServer} from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../src/App';
import { Link } from "react-router-dom";
import sinon from "sinon";

describe("Render app", function () {
  // beforeAll(function() {
  //   sinon.stub(ToStubComponent, "default").returns(<div>A stub</div>);
  // });

  it('renders learn react link', () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // console.log(linkElement);
    // expect(linkElement).toBeInTheDocument();
  });
  // beforeAll(function () {
  //   sinon.stub(ToStubComponent, "default").returns(<div>A stub</div>);
  // });

  // it("basic React components", function () {
  //   const { container } = render(<App />);

  //   expect(container).toHaveTextContent("A stub");
  // });
});

