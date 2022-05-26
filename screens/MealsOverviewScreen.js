import { View, Text, StyleSheet } from 'react-native';
import {MEALS} from '../data/dummy-data';


export const MealsOverviewScreen = ({ route }) => {
    //We get the navigation  and route because the component is registred as screen in app.js
   const catId =  route.params.categoryId;
   //This how to get the gategoryId that passed throuth navigation on the screen 
  return (
    <View style={styles.container}>
       <Text>Meals Overview Screen - {catId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16, 
    }
})