import React from 'react';
import SearchComponent from '../src/components/header/searchComponent';
import renderer from 'react-test-renderer'

test("App", () => {
  const component = renderer.create(<SearchComponent/>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});