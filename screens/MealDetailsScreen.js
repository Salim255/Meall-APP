import {View, Text, Image, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import { MealDetails } from '../components/MealDetails';

export const MealDetailsScreen = ({route}) => {
  
  const mealId =  route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
   <View style={styles.outerContiner}>
      <View style={styles.innerContainer}>
         <View>
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl }}/>
                <Text> {route.params.title}</Text>
               <MealDetails duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability} />

                <Text>Ingredients</Text>
                { selectedMeal.ingredients.map((ingredient) =>
                       <Text key={ingredient}>{ingredient}</Text>
                )}
                <Text>Steps</Text>
                {selectedMeal.steps.map((step) =>(
                       <Text key={step}>{step}</Text>
                ))}
          </View>
    </View>
   </View>
  )
}


const styles = StyleSheet.create({
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
    height: 200,
},
})