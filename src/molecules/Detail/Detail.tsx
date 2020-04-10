import React from 'react';
import { View, Text, Button } from 'react-native';

const Detail = (props: { navigation: any }) => (
    <View>
        <Text>Detail</Text>
        <Button
            title="To Settings"
            onPress={() => {
                props.navigation.navigate('Settings');
            }}
        />
    </View>
);

export default Detail;
