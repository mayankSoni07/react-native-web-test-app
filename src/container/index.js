import React from 'react';
import { View, Text, StatusBar } from 'react-native';

/* Import custom container */
import Home from './Home';
import StatusBarComponent from '../component/StatusBar';
import Header from '../component/Header';
import MenuDrawer from '../component/MenuDrawer';

/* Import Styles */
import styles from './index.styles';

export default class HybridApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpenMenuDrawer: false
    }

    /* Bind this context to methods here. */
    this.toggleMenuDrawer = this.toggleMenuDrawer.bind(this);
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
        <Home />

        {/* Render Side Drawer, Only when isOpenMenuDrawer key is True in state */}
        {this.state.isOpenMenuDrawer && <MenuDrawer toggleMenuDrawer={this.toggleMenuDrawer} />}

      </View>
    );
  }
}
