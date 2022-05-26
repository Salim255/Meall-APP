import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {MEALS} from '../data/dummy-data';
import { MealItem } from '../components/MealItem';


export const MealsOverviewScreen = ({ route }) => {
   //const route = useRoute();
    //We get the navigation  and route because the component is registred as screen in app.js
   const catId =  route.params.categoryId;
   //This how to get the gategoryId that passed throuth navigation on the screen
   
   const displyedMeals = MEALS.filter((mealItem) => {
       return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   const  renderMealItem = (itemData) =>{
            return <MealItem title={ itemData.item.title }></MealItem>
   }


  return (
    <View style={styles.container}>
        <FlatList data={ displyedMeals } keyExtractor={(item) => item.id} 
        renderItem={renderMealItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16, 
    }
})