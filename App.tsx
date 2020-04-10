import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Detail from './src/molecules/Detail';
import Home from './src/molecules/Home';
import Settings from './src/molecules/Settings';

const stackNavigator = createStackNavigator(
    {
        Home,
        Settings,
        Detail,
    },
    {
        initialRouteName: 'Home',
    }
);

const Navigation = createAppContainer(stackNavigator);

export default function App() {
    return <Navigation />;
}
