import React from "react";
import { View, Text, FlatList } from 'react-native'
import useFetch from '../../hooks/UseFetch/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const API_URL = "https://fakestoreapi.com/products/categories"

function Categories({navigation}) {

    const{data,loading,error} = useFetch(API_URL)

    const handleSelect = category => {
        navigation.navigate("ProductsScreen", {category})
    }

    const renderItems = ({item}) => (<CategoryCard category = {item} onSelect={() => handleSelect(item)}/>)

    if(loading){
        return <Loading/>
    }

    if(error){
        return<Error/>
    }
    return (
        <View >
           <FlatList
           data = {data}
           renderItem={renderItems}
           />
        </View>
    )

}

export default Categories