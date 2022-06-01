import { useEffect, useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import { MealItem } from '../components/MealItem';


export const MealsOverviewScreen = ({ route, navigation }) => {
   //const route = useRoute();
    //We get the navigation  and route because the component is registred as screen in app.js
   const catId =  route.params.categoryId;
   //This how to get the gategoryId that passed throuth navigation on the screen
   
   const displyedMeals = MEALS.filter((mealItem) => {
       return mealItem.categoryIds.indexOf(catId) >= 0;
   });

  
    
   useLayoutEffect(() =>{
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
        title: categoryTitle
     });
  },[catId, navigation]);

   const  renderMealItem = (itemData) =>{
        const item = itemData.item ;
        console.log(item.id, "Screen");
         

        const mealItemProps  = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity
            
        }

       return <MealItem title={ mealItemProps.title } imageUrl={mealItemProps.imageUrl} duration={mealItemProps.duration} complexity={mealItemProps.complexity} affordability={mealItemProps.affordability}  id={mealItemProps.id}></MealItem>
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