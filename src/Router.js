import React from "react";
import{View,Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories/Categories";
import Products from './pages/Products/Products'
import Details from './pages/Detail/Details'

const Stack = createNativeStackNavigator()

function App(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name= "CategoriesScreen"
                    component={Categories}
                    options = {{
                        title: "Categories",
                        headerStyle: {backgroundColor: "#64b5f6"},
                        headerTitleAlign: "center",
                        headerTitleStyle: {color: "white"}
                    }}
                    />
                    <Stack.Screen 
                    name = "ProductsScreen" 
                    component={Products} 
                    options = {{
                    title: "Shop",
                    headerStyle: {backgroundColor: "#64b5f6"},
                    headerTitleAlign: "center",
                    headerTitleStyle: {color: "white"},
                    headerTintColor: "white"
                }}

                    />
                    <Stack.Screen 
                    name ="DetailPage" 
                    component={Details} 
                    options={{
                        title: "Details",
                        headerStyle: {backgroundColor: "#64b5f6"},
                        headerTitleAlign: "center",
                        headerTitleStyle: {color: "white"},
                        headerTintColor: "white"
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default App