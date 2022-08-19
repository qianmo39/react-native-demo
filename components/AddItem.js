import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="添加一个任务"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TouchableOpacity
        onPress={() => {
          addItem(text);
          setText('');
        }}
        style={styles.btn}>
        <Text style={styles.btnText}>
          <Icon name="plus" />
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 5,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#00a497',
    padding: 4,
    margin: 4,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AddItem;
