import {View, Text} from 'react-native';

export const MealDetails = ({route}) => {
  console.log(route.params.id, 'details');
  const mealId =  route.params.mealId;
  return (
    <View>
         <Text>Hello from MEALS DETAILS ({mealId}) </Text>
    </View>
  )
}
