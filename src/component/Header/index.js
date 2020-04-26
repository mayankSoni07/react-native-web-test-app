import React from 'react';
import { ScrollView, View, Image, TouchableHighlight } from 'react-native';

/* Import Styles here */
import styles from './index.styles';

export default class Header extends React.Component {
    render(){
        return (
            <View style={styles.headerContainer}>
                <View style={styles.menuIconContainer}>
                    <ScrollView style={styles.scrollViewContainer}>
                        <TouchableHighlight onPress={this.props.toggleMenuDrawer}>
                            <Image
                                style={styles.menuIcon}
                                source={require('../../images/Menu_icon_black.png')} 
                            />
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                <View>
                    <Image style={styles.logoIcon} source={require('../../images/Restaurant_logo.png')} />
                </View>
            </View>
        );
    }
}