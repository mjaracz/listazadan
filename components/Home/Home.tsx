import React from 'react';
import {Text, View} from 'react-native';
import style from './Style';


function Home() {
  return(
    <View style={style.home}>
      <Text style={style.home__title}>
        Hi, my name is Michał
      </Text>
      <Text style={style.home__text}>
        I invite you to look into my react-native portfolio.
      </Text>
      <Text style={style.home__text}>
        Just tap which of the options below.
      </Text>
    </View>
  )
}

export default Home;
