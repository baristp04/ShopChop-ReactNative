import React,{useState,useEffect} from "react";
import {View,FlatList,ActivityIndicator,Text} from 'react-native'
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/UseFetch/useFetch";
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const API_URL = "https://fakestoreapi.com/products"

const Products = ({route, navigation}) => {

    const {category} = route.params

    const{data,loading,error} = useFetch(API_URL + "/" + "category/" + category)    

    const handleProductSelect = id => {
        navigation.navigate("DetailPage", {id})
    }

    const renderItems = ({item}) => (<ProductCard product={item} onSelect = {() => handleProductSelect(item.id)}/>)

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }

    return(
        <View>
            <FlatList
            data = {data}
            renderItem={renderItems}
            />
        </View>
    )
}

export default Products