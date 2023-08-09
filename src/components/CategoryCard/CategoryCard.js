import {View,Text, TouchableWithoutFeedback} from 'react-native'
import styles from './CategoryCard.style'

const CategoryCard = ({category, onSelect}) => {
    return(

        <TouchableWithoutFeedback onPress = {onSelect}>
            <View style = {styles.container}>
                <Text style = {styles.title}>{category}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default CategoryCard