import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Task.style';

const Task = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text
          style={{
            ...styles.itemText,
            textDecorationLine: props.textDecorationLine,
          }}>
          {props.text}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Task;
