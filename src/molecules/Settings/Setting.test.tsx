import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Settings from './index';

describe('Home Snapshot test', () => {
    it('renders correctly', () => {
        const mockNavigation = jest.fn();
        const tree = renderer.create(<Settings navigation={mockNavigation} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
