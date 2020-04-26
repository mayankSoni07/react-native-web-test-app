import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    drawerContainer: {
        flexDirection: 'row',
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 10,
        width: '100%',
        marginTop: StatusBar.currentHeight,
        height: '100%',
    },
    closeButtonContainer:{
        alignItems: "center",
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    closeButton:{
        height: 60,
        width: 60
    },
    dataArea:{
        width: 200,
        height: '100%',
        backgroundColor: '#fff',
    },
    emptyArea:{
        width: width-200,
        height: '100%',
        opacity: 0.75,
        backgroundColor: 'grey',
    }
});
