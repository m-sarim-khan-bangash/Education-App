import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Menu from '../component/Menu';

const Home = props => {
  const description =
    'lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quidem quis ipsum dolor sit amet.';
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require('../../assests/logo.png')}
        />
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: '#4c5dab',
              marginTop: 0,
            },
          ]}>
          {props.AppName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeTope: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
    marginBottom: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  paraStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 35,
    lineHeight: 26,
    paddingTop: 20,
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});

export default Home;
