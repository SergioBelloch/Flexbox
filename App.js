import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={[styles.subsectionimg, {flex: 1}]}>
            <View style={styles.image}>
              <Image
                source={require('./images/profile.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={[styles.subsection, {flex: 1}]}>
            <Text>Posts</Text>
            <Text>20</Text>
          </View>
          <View style={[styles.subsection, {flex: 1}]}>
            <Text>Followers</Text>
            <Text>110304</Text>
          </View>

          <View style={[styles.subsection, {flex: 1}]}>
            <Text>Following</Text>
            <Text>1103</Text>
          </View>
        </View>
        <Button mode="contained-tonal">Edit profile</Button>
        <View style={styles.section2}>
          <ScrollView contentContainerStyle={styles.section2}>
            {images.map((imageUrl, index) => (
              <Image
                key={index}
                source={{uri: imageUrl}}
                style={styles.imageItem}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.section3}>
          {/* Aquí puedes agregar mas contenido o un footer */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  section1: {
    flex: 0.5,
    flexDirection: 'row',
  },
  subsectionimg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  subsection: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 1,
  },
  section3: {
    flex: 0.5,
  },
  image: {
    borderRadius: 50,
    width: '100%',
    height: '80%',
  },
  imageItem: {
    width: screenWidth / 4 - 5,
    height: screenWidth / 4 - 5,
    margin: 1,
  },
});
