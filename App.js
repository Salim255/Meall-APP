import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();//Object with two props

export default function App() {
  return (
       <> 
          <StatusBar style='dark'/>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#351401'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#3f2f25' }}}>
                <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
                options={{
                  title: 'All Categorires',
                  

                }}/>
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
            </Stack.Navigator>
            
          </NavigationContainer>
       </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
