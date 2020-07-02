import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import AddRestaurantModal from '../app/AddRestaurantModal';
import {it} from 'jest-circus';

describe('Add restourent modal component', () => {
  it('should clear the input field after save', async () => {
    const mockFn = jest.fn();
    const restaurantName = 'Maharaja Fast Food';
    const {getByTestId} = render(<AddRestaurantModal onSaveClicked={mockFn} />);
    fireEvent(
      getByTestId('newRestaurantTextField'),
      'onChangeText',
      restaurantName,
    );
    await fireEvent(getByTestId('saveRestaurantButton'), 'onPress');
    expect(getByTestId('newRestaurantTextField').props.value).toEqual('');
  });
  it('should call the onsave handler with text', () => {
    const mockFn = jest.fn();
    const restaurantName = 'Maharaja Fast Food';
    const {getByTestId} = render(<AddRestaurantModal onSaveClicked={mockFn} />);
    fireEvent(
      getByTestId('newRestaurantTextField'),
      'onChangeText',
      restaurantName,
    );
    fireEvent(getByTestId('saveRestaurantButton'), 'onPress');
    expect(mockFn).toHaveBeenCalledWith(restaurantName);
  });
});
