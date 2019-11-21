import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={{
            uri:
              'https://github.com/rp-c308/lesson-06-leesinplays/blob/master/src/img/bg.jpg',
          }}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.image}>
            <Image
              source={{
                uri:
                  'https://github.com/rp-c308/lesson-06-leesinplays/blob/master/src/img/travel_time.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.titleText}>Explore the world</Text>
          </View>
          <View>
            <Button
              onPress={() => {
                alert('Success!');
              }}
              title="Get Started"
              color="dc9b59"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'black',
  },
  image: {
    width: '50%',
    height: '50%',
    marginTop: 100,
  },
});
