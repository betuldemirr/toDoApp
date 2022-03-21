import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

import Header from './components/Header/Header';
import Task from './components/Task/Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [lineState, setLineState] = useState('none');

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    setCounter(counter + 1);
  };

  const deleteTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setCounter(counter - 1);
  };

  const changeLineState = () => {
    if (lineState === 'none') {
      setLineState('line-through');
    } else {
      setLineState('none');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header counter={counter} />
      <ScrollView style={styles.scrollContainer}>
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => changeLineState()}
              onLongPress={() => deleteTask(index)}>
              <Task textDecorationLine={lineState} text={item} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <KeyboardAvoidingView style={styles.writeItemsContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Yapılacakları yazınız...'}
          placeholderTextColor={'#FE9801'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#04393b',
  },
  scrollContainer: {
    marginTop: 20,
    marginBottom: '10%',
  },
  writeItemsContainer: {
    flexDirection: 'row',
    bottom: 30,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 28,
    paddingHorizontal: 15,
    width: '80%',
    backgroundColor: '#f0ffc7',
    borderRadius: 60,
    borderColor: '#FE9801',
    borderWidth: 2,
    color: 'black',
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0ffc7',
    borderColor: '#FE9801',
    borderWidth: 2,
  },
  addText: {
    color: '#FE9801',
    fontSize: 28,
  },
});
