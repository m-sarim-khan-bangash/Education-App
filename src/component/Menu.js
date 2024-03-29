import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/90/000000/training.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Student')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/90/000000/conference.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/about.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/phone-office.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
