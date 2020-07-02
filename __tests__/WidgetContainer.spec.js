import React from 'react';
import {render} from 'react-native-testing-library';
import WidgetContainer from '../app/WidgetContainer';
import api from '../app/api';
//import act from '@testing-library/react';
jest.mock('../app/api');

describe('WidgetContainer', () => {
  it('loads widgets upon mount', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ],
    });
    const {findByText} = render(<WidgetContainer />);
    //debug();
    //expect(queryByText('Widget 1')).not.toBeNull();
    //expect(queryByText('Widget 2')).not.toBeNull();
    await findByText('Widget 1');
    await findByText('Widget 2');
  });

  // it('should match with the snapshot', () => {
  //   const tree = render(<WidgetContainer />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
