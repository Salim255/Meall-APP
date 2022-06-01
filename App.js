import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetails } from './screens/MealDetails';

const Stack = createNativeStackNavigator();//Object with two props

export default function App() {
  return (
       <> 
          <StatusBar style='light'/>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#351401'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#3f2f25' }}}>
                <Stack.Screen name="MealsCategories" 
                component={CategoriesScreen} 
                options={{
                  title: 'All Categorires'}}/>
                <Stack.Screen
                 name="MealsOverview" 
                 component={MealsOverviewScreen}
                /*  options={({route, navigation}) => {
                   const catId = route.params.categoryId;
                   return {
                         title: catId,
                   };
                 }} *///W'll get this  object automaticly by reac navigation, 
                 //and the fuction will be excuted by react navigation when ever the screen become active , 
                 //then the fuction will retun un options object
                />

                <Stack.Screen name='MealDetails' component={MealDetails} />
            </Stack.Navigator>
            
          </NavigationContainer>
       </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
