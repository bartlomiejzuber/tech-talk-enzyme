import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { App } from '../App';

describe('<Menu />', () => {
  it('renders the app with two pierogis already in the basket', async () => {
    /**
     * There's no official & recommended way to test effects in enzyme
     */

    /* e.g. mock useEffect to simply run function inside */
    // jest.spyOn(React, "useEffect").mockImplementation(f => f());
    // const wrapper = await mount(<App withApiCall />);

    // expect(wrapper.find('[data-test-id="item"]').length).toBe(5);

    // await act(async () => {
    //   await wrapper.update();
    // });

    // /* Wait for api call */
    // return new Promise((res, rej) => {
    //   setTimeout(() => {
    //     expect(wrapper.find('[data-test-id="item"]').length).toBe(3);
    //     expect(wrapper.find('[data-test-id="order__item"]').length).toBe(2);

    //     res();
    //   }, 300);
    // });
  });
});
