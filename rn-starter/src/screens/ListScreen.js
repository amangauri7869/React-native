import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
       {name: 'Friend #1', Age: 20},
       {name: 'Friend #2', Age: 21},
       {name: 'Friend #3', Age: 22},
       {name: 'Friend #4', Age: 23},
       {name: 'Friend #5', Age: 24},
       {name: 'Friend #6', Age: 25},
       {name: 'Friend #7', Age: 26},

    ];
    return (
         <FlatList
         keyExtractor={(friends) => friends.name}
         data={friends} 
         renderItem={({item}) =>{
          return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>
         }} 
         />
    );

};

const styles= StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;