import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#bdd47f',
    padding: 15,
    borderRadius: 20,
    margin: 10,
    width: '75%',
    flexDirection: 'row',
  },
  itemText: {
    color: 'black',
    maxWidth: '80%',
    paddingLeft: '2%',
  },
});
