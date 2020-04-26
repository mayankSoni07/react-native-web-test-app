import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';

import { getImage } from '../../utilities/commonMethods';

/* Import Styles here */
import styles from './index.styles';

export default class Home extends React.Component {
  constructor(props){

  }
  
  render(){
    return (
      <ScrollView style={styles.container}>
        {/* <Text style={styles.text}>Gargi Soni</Text> */}
        {/* <Image style={styles.img} source={require('./shivi.jpg')} /> */}
        <Image style={styles.img} source={{ uri: getImage() }} />
        <Image style={styles.img} source={{ uri: getImage() }} />
        <Image style={styles.img} source={{ uri: getImage() }} />
      </ScrollView>
    );
  }
}
