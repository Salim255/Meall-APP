import { useLayoutEffect } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button}  from 'react-native';
import {MEALS} from '../data/dummy-data';
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { List } from '../components/MealDetail/List';
import { IconButton } from '../components/IconButton';



export const MealDetailsScreen = ({route, navigation}) => {
  
  const mealId =  route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
   
  const headerButtonPressHandler = ()  => {
      console.log('Press');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
       headerRight: () => {
         {/* <Button  title='Tab me' onPress={headerButtonPressHandler}/> */}
         return <IconButton icon='star' color='white' onPress={headerButtonPressHandler}/>
       }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
  
         <ScrollView  style={styles.rootContainer}>
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl }}/>
                <Text style={styles.title}> {route.params.title}</Text>
               <MealDetails duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}  textStyle={styles.detailstext} />

              <View style={styles.listOuterContainer}>
                  <View style={styles.listContainer}>
                      <Subtitle>Ingredients</Subtitle>
                      <List selectedMeal={selectedMeal.ingredients} />
                        
                      <Subtitle>Steps</Subtitle>
                      <List selectedMeal={selectedMeal.steps} />
                  </View>
              </View>
          </ScrollView>
    
  )
}


const styles = StyleSheet.create({
  rootContainer:{
    marginBottom: 32
  },
  outerContiner:{
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 16,
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden'
  },
  detailsItem:{
    marginHorizontal: 4,
    fontSize: 12
  },
  image: {
    width: '100%',
    height: 320,
},
title:{
  fontWeight: 'bold',
  fontSize: 24,
  margin: 8,
  textAlign: 'center',
  color: 'white'
},
detailstext:{
  color: 'white'
},
listContainer:{
  width: "80%",
 
},
listOuterContainer:{
  alignItems: 'center'
}

})