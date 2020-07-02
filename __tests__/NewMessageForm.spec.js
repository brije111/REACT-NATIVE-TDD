import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import NewMessageForm from '../app/NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    it('it clears the message field', () => {
      const {getByTestId} = render(<NewMessageForm />);

      fireEvent.changeText(getByTestId('messageText'), 'Hello World!');
      fireEvent.press(getByTestId('sendButton'));

      expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('calls the send handler', () => {
      const messageText = 'Hello World';
      const sendHandler = jest.fn();
      const {getByTestId} = render(<NewMessageForm onSend={sendHandler} />);

      fireEvent.changeText(getByTestId('messageText'), messageText);
      fireEvent.press(getByTestId('sendButton'));

      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
