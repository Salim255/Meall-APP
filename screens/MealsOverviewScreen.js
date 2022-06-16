import { useEffect, useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import { MealItem } from '../components/MealsList/MealItem';
import {MealsList } from '../components/MealsList/MealsList';


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

  return <MealsList items={displyedMeals}/>
}

