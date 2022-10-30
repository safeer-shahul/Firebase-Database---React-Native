import React from "react";
import { View, Text, Button } from "react-native";

function Home({navigation}){
    return(
        <View>
            <Text>
                Home Screen
            </Text>
            <Button title="Add an item"
            onPress={() => navigation.navigate('Additem')}
            />
            <Button title="List of item"
            onPress={() => navigation.navigate('List')}/>
        </View>
    );
}

export default Home;
