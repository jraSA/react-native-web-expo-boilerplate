import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from './index';

describe('Home Snapshot test', () => {
    it('renders correctly', () => {
        const mockNavigation = jest.fn();
        const tree = renderer.create(<Home navigation={mockNavigation} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
