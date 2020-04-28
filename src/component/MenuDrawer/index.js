import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native';

import { EXCLUSIVE_VALUE, SEE_ALL_VALUE } from '../../utilities/commonConstants';
import styles from './index.styles';

export default class MenuDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  changeSelectedCategoryComponent

  render() {
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
                        return <TouchableHighlight key={product.category} onPress={() => {
                                this.props.changeSelectedCategory(product.category)
                            }}>
                            <View style={styles.categoryWrapper}>
                                <View style={styles.seperator}></View>
                                <Text>{product.category.toUpperCase()}</Text>
                                <Text>{product.restaurantList.length + " Restaurants"}</Text>
                            </View>
                        </TouchableHighlight>
                    })}
                    <TouchableHighlight key={EXCLUSIVE_VALUE} onPress={() => {
                            this.props.changeSelectedCategory(EXCLUSIVE_VALUE);
                        }}>
                        <View style={styles.categoryWrapper}>
                            <View style={styles.seperator}></View>
                            <Text>EXCLUSIVE</Text>
                            <Text>{this.props.exclusiveProducts.length + " Restaurants"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight key={SEE_ALL_VALUE} onPress={() => {
                            this.props.changeSelectedCategory(SEE_ALL_VALUE);
                        }}>
                        <View style={styles.categoryWrapper}>
                            <View style={styles.seperator}></View>
                            <Text>SEE ALL</Text>
                            <Text>{this.props.seeAllProducts.length + " Restaurants"}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            {/* Empty area in Right */}
            <TouchableHighlight onPress={this.props.toggleMenuDrawer}>
                <View style={styles.emptyArea}></View>
            </TouchableHighlight>

        </View>
    );
  }
}