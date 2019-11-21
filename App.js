/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={{
        uri:
          'https://github.com/rp-c308/lesson-06-leesinplays/blob/master/src/img/rainforest_bg.jpg',
      }}
      style={{width: '100%', height: '100%'}}>
      <View>
        <Text style={styles.header}>BuzzForest></Text>
        <Image
          source={{
            uri:
              'https://github.com/rp-c308/lesson-06-leesinplays/blob/master/src/img/orangutan.jpg',
          }}
          style={{width: 375, height: 200, marginTop: 20}}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  section: {
    color: '#557622',
    fontSize: 12,
    width: 375,
    marginTop: 20,
    marginBottom: 20,
  },

  header: {
    color: '#3f300e',
    backgroundColor: '#e1ddaa',
    fontSize: 20,
    padding: 20,
    width: 415,
  },

  bannerImage: {
    width: 375,
    height: 200,
    marginTop: 20,
  },
});

export default App;
