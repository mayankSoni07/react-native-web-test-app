import React from 'react'
import { View, Image, Text, ScrollView, TouchableHighlight } from 'react-native';

import styles from './index.styles';

export default class MenuDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
 
  render() {
    return (
        <View style={styles.drawerContainer}>
            <View style={styles.dataArea}>
                <TouchableHighlight onPress={this.props.toggleMenuDrawer}>
                    <View style={styles.closeButtonContainer}>
                        <Image style={styles.closeButton} source={require('../../images/Close.png')} />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.emptyArea}>

            </View>
        </View>
    );
  }
}