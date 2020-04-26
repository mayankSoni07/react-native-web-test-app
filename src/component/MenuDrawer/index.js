import React from 'react'
import { View, Image, Text, ScrollView, TouchableHighlight } from 'react-native';

import styles from './index.styles';

export default class MenuDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
 
  render() {
      console.log('menu state', this.state)
    return (
        <View style={styles.drawerContainer}>

            <View style={styles.dataArea}>
                <TouchableHighlight onPress={this.props.toggleMenuDrawer}>
                    <View style={styles.closeButtonContainer}>
                        <Image style={styles.closeButton} source={require('../../images/Close.png')} />
                    </View>
                </TouchableHighlight>
                <View style={styles.categoryContainer}>
                    {this.state.productsData.map((product)=>{
                        return <TouchableHighlight key={product.category} onPress={()=>console.log('hello ji')}>
                            <View style={styles.categoryWrapper}>
                                <View style={styles.seperator}></View>
                                <Text>{product.category.toUpperCase()}</Text>
                                <Text>{product.restaurantList.length + " Restaurants"}</Text>
                            </View>
                        </TouchableHighlight>
                    })}
                </View>
            </View>

            {/* Empty area in Right */}
            <View style={styles.emptyArea}></View>

        </View>
    );
  }
}