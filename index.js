// Import a library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Add some styles
// const styles = StyleSheet.create({
//   title: {
//     flex: 1,
//     fontSize: 30,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
// });

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

//export default App;
