import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0ffc7',
    width: '100%',
    height: '14%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FE9801',
  },
  title: {
    width: '80%',
    paddingLeft: '10%',
    fontSize: 25,
    color: '#FE9801',
    fontWeight: 'bold',
  },
  counter: {
    color: '#FE9801',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
