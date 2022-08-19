import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: '吃饭'},
    {id: uuid.v4(), text: '睡觉'},
    {id: uuid.v4(), text: '摸鱼'},
  ]);
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const addItem = text => {
    if (text) {
      setItems(prevItems => {
        return [...prevItems, {id: uuid.v4(), text: text}];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="TODO" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
