import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 1
    },
    image:{
        height: Dimensions.get("window").height/3,
        width: Dimensions.get("window").width,
        resizeMode: "contain"
    },
    body: {
        padding:10,
    },
    title:{
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    description:{
        alignItems:"center",
        fontSize: 15,
        color: "black"
    },
    price:{
        textAlign: "right",
        color: "black",
        fontStyle: "italic",
        fontSize: 20,
    },
})