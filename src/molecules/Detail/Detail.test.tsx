import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Detail from './index';

describe('Detail Snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Detail />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
