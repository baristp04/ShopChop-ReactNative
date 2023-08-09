import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        margin: 10,
        flexDirection: "row",
        backgroundColor:"white",
        borderWidth:1,
        borderColor: "black"
    },
    image:{
        width: 100,
        resizeMode: "contain",
        minHeight: 100
    },
    body:{
        flex:1,
        padding: 5,
        justifyContent: "space-between" 
    },
    title:{
        fontWeight: "bold",
        fontSize: 17,
        color: "black"
    },
    price:{
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 16,
        textAlign: "right"
    },
})