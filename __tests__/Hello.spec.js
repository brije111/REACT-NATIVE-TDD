import React from 'react';
import {render} from 'react-native-testing-library';
import Hello from '../app/Hello';

describe('Testing Text', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Hello name="Brijesh" />);
    expect(queryByText('Hello, Brijesh!')).not.toBeNull();
  });
});
