import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = (props: { navigation: any }) => (
    <View>
        <Text>Home</Text>
        <Button
            title="To detail"
            onPress={() => {
                console.log(props);
                props.navigation.navigate('Detail');
            }}
        />
    </View>
);

export default Home;
