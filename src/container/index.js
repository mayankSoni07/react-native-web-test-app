import React from 'react';
import { View, Text, StatusBar } from 'react-native';

/* Import custom container */
import Home from './Home';
import StatusBarComponent from '../component/StatusBar';
import Header from '../component/Header';
import MenuDrawer from '../component/MenuDrawer';

import { getHandledData } from '../utilities/commonMethods';

/* Import Styles */
import styles from './index.styles';

let ref;

export default class HybridApp extends React.Component {
  constructor(props){
    super(props);
    let obj = getHandledData();
    this.state = {
      ...obj,
      isOpenMenuDrawer: false,
      selectedCategory: obj["productsData"][0]["category"],
      ref: null
    }

    /* Bind this context to methods here. */
    this.toggleMenuDrawer = this.toggleMenuDrawer.bind(this);
    this.changeSelectedCategory = this.changeSelectedCategory.bind(this);
  }

  passRefs(refrence){
    ref = refrence;
  }

  /* Used to change selected category in drawer */
  changeSelectedCategory(category){
    if(this.state.selectedCategory !== category)
      this.setState({ selectedCategory: category });

    if(ref)
      ref.home_scroll.scrollTo({x: 0, y: 0, animated: true})

    this.toggleMenuDrawer();
  }

  /* Used to open or close the drawer */
  toggleMenuDrawer(){
    this.setState({ isOpenMenuDrawer: !this.state.isOpenMenuDrawer });
  }

  render(){
    return (
      <View style={styles.container}>

        {/* Render StatusBar */}
        {StatusBar.currentHeight && <StatusBarComponent />}

        {/* Render Header */}
        <Header toggleMenuDrawer={this.toggleMenuDrawer} />

        {/* Render Home container */}
        <Home passRefs={this.passRefs} selectedCategory={this.state.selectedCategory} {...this.state} />

        {/* Render Side Drawer, Only when isOpenMenuDrawer key is True in state */}
        {this.state.isOpenMenuDrawer && <MenuDrawer 
          {...this.state}
          toggleMenuDrawer={this.toggleMenuDrawer}
          changeSelectedCategory={this.changeSelectedCategory}
        />}

      </View>
    );
  }
}
