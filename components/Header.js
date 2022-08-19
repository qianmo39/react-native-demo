import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#007bbb',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
  }
});

export default Header;
