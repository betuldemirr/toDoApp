import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Header.style';

const Header = ({counter}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>YAPILACAKLAR</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
};

export default Header;
