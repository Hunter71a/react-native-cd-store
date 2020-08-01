import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, titleStyle, artistStyle, albumArtworkStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={artistStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={albumArtworkStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button afterPress={() => Linking.openURL(url)}>
          Buy Now From Amazon
          </ Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 75,
    width: 75,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 10,
  },
  titleStyle: {
    fontSize: 22,
  },
  artistStyle: {
    fontSize: 16,
  },
  albumArtworkStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;