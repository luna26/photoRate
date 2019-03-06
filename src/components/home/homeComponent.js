import React,  { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

class HomeComponent extends Component{
    render(){
        const { viewContainer } = styles;

        return (
            <View style={viewContainer}>
                <LoginButton />
            </View>
        );
    };
}

const styles = {
    viewContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default HomeComponent;