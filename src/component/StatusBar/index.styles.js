import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
    statusBarContainer: {
        // flex: 1,
        height: StatusBar.currentHeight,
        width: '100%',
        // backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    starImg:{
        height: StatusBar.currentHeight,
        width: '100%'
    }
});
