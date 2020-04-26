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
    closeButtonContainer: {
        alignItems: "center",
    },
    closeButton: {
        height: 60,
        width: 60
    },
    dataArea: {
        width: 200,
        height: '100%',
        backgroundColor: '#fff',
    },
    emptyArea: {
        width: width - 200,
        height: '100%',
        opacity: 0.75,
        backgroundColor: 'grey',
    },
    categoryContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },
    categoryWrapper:{
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
    },
    seperator: {
        height: 1,
        marginBottom: 10,
        width: 140,
        backgroundColor: "grey"
    }
});
