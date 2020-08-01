import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';



class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(item =>
      <AlbumDetail key={item.title} album={item} />
    );
  }


  render() {
    console.log(this.state);

    return (
      <ScrollView>
        <View>
          {this.renderAlbums()}
        </View>
      </ScrollView>
    );
  }
}

export default AlbumList;
