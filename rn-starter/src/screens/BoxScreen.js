import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen= () => {

    return <View style={style.parentStyle}>
        <View style={style.viewOneStyle}/>
        <View style={style.viewTwoStyle}/>
        <View style={style.viewThreeStyle}/>
    </View>
}

const style=StyleSheet.create ({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 250,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
       height: 50,
       width: 50,
       backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        margin: 50
    },
    viewThreeStyle: {
        height: 50,
       width: 50,
       backgroundColor: 'blue'
    }

});

export default BoxScreen;