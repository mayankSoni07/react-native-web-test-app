import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';

import { getImage } from '../../utilities/commonMethods';
import { EXCLUSIVE_VALUE, SEE_ALL_VALUE } from '../../utilities/commonConstants';

/* Import Styles here */
import styles from './index.styles';

export default class Home extends React.Component {

  componentDidMount(){
    this.props.passRefs(this.refs)
  }
  
  renderProducts(product){
    return <View key={Math.random()*100} style={styles.productWrapper}>
              <Image style={styles.img} source={{ uri: getImage() }} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.foodTypeText}>{product.food_types.join(", ")}</Text>
              <View style={styles.ratingWrapper}>
                <View style={styles.rateViewWrapper}>
                  <View style={{ backgroundColor: parseFloat(product.ratings) >= 4 ? "#48c479" : "#db7c38", ...styles.rateView}} >
                    <Image style={styles.starImg} source={require("../../images/Star.png")} />
                    <Text style={styles.rateText}>{product.ratings}</Text>
                  </View>
                </View>
                <View style={styles.firstDot}>
                  <Text>.</Text>
                </View>
                <View style={styles.timeView} >
                  <Text>{product.delivery_time}</Text>
                </View>
                <View style={styles.secondDot}>
                  <Text>.</Text>
                </View>
                <View style={styles.rupeesView}>
                  <Text>{"₹" + product.price_for_two + " FOR TWO"}</Text>
                </View>
              </View>
            </View>
  }

  render(){
    return (
      <ScrollView ref="home_scroll" style={styles.container}>
        {this.props.productsData.map((item)=>{
          if(item.category === this.props.selectedCategory){
            return item.restaurantList.map((product)=>{
              return this.renderProducts(product);
            })
          }
        })}
        {this.props.selectedCategory === EXCLUSIVE_VALUE && this.props.exclusiveProducts.map((product)=>{
              return this.renderProducts(product);
            })
        }
        {this.props.selectedCategory === SEE_ALL_VALUE && this.props.seeAllProducts.map((product)=>{
              return this.renderProducts(product);
            })
        }
      </ScrollView>
    );
  }
}
