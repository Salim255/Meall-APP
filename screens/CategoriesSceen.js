import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

 




function CategoriesScreen ({ navigation }) {
    //This *navigation* props is provided by react navigation from app.js for any navigation component
    const rendderCategoryItm =(itemData) =>{
        const pressHandler = () => { 
              navigation.navigate("MealsOverview");
        }

        return <CategoryGridTile title={itemData.item.title} 
        color={itemData.item.color}
        onPress={pressHandler}/>
    
    }

    return <FlatList data={CATEGORIES}
     keyExtractor={(item) => item.id} 
     renderItem={rendderCategoryItm}
     numColumns={2}
     />

}

export default CategoriesScreen