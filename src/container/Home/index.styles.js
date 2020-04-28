import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

/* Fetch Device width */
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: Platform.OS ==="web" ? width - 600 : width,
        height: height - StatusBar.currentHeight,
        marginTop: Platform.OS === "web" ? 80 : 20,
        paddingHorizontal: 20
    },
    productWrapper: {
        padding: 20,
        borderWidth: 1,
        borderColor: "grey",
        marginBottom: 20,
    },
    productName:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    foodTypeText:{
        marginTop: 5,
        fontSize: 15,
        color: "grey"
    },
    img: {
        height: 300,
        width: '100%'
    },
    ratingWrapper:{
        flexDirection: "row",
        marginTop: 10
    },
    rateViewWrapper:{
        flex: 0.20,
    },
    rateView:{
        flexDirection: 'row',
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    starImg:{
        width: 15,
        height: 15,
        marginRight: 5
    },
    rateText:{
        color: "#fff",
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        // backgroundColor: "green",
    },
    firstDot:{
        flex: 0.10,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    timeView:{
        flex: 0.20,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    secondDot:{
        flex: 0.10,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    rupeesView:{
        flex: 0.35,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    }
});
