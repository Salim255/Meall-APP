import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesSceen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();//Object with two props
const Drawer = createDrawerNavigator();


const DrawerNavigator = () =>{
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401'},
    headerTintColor: 'white',
    sceneContainerStyle: {backgroundColor: '#3f2f25' },
    
  }}>
       <Drawer.Screen name='Categories' component={CategoriesScreen} options={
         {
           title: 'All Categories'
         }
       }/>
       <Drawer.Screen name='Favorites' component={FavoritesScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
       <> 
          <StatusBar style='light'/>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#351401'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#3f2f25' }
                  }}>
                
                <Stack.Screen name="Drawer" 
                component={DrawerNavigator} 
                options={{
                 /*  title: 'All Categorires', */
                  headerShown: false,
                }}
                  />
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

                <Stack.Screen name='MealDetails' 
                component={MealDetailsScreen} 
                options={{
                  title: 'About The Meal'
                }}
               /*  options={{
                  headerRight: () => {
                      return <Button title="Tap me!" onPress={}/>;
                  },
                }} *//>

            </Stack.Navigator>
            
          </NavigationContainer>
       </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
