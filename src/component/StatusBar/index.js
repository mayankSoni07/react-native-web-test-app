import React from 'react';
import { Text, View, Image} from 'react-native';

/* Import Styles here */
import styles from './index.styles';

export default function StatusBarComponent() {
  return (
    <View style={styles.statusBarContainer}>
      <Image style={styles.starImg} source={require('../../images/Stars.gif')} />
    </View>
  );
}
