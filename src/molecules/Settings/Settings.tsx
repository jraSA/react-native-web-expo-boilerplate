import React from 'react';
import { View, Text, Button } from 'react-native';

const Settings = (props: { navigation: any }) => (
    <View>
        <Text>Settings</Text>
        <Button
            title="To home"
            onPress={() => {
                props.navigation.navigate('Home');
            }}
        />
    </View>
);

export default Settings;
