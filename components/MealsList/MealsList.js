import { StyleSheet, View, FlatList } from "react-native";
import { MealItem } from "./MealItem";

export const MealsList = ({items}) => {

  const  renderMealItem = (itemData) =>{
    const item = itemData.item ;
    console.log(item.id,);
     
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
    <FlatList data={ items } keyExtractor={(item) => item.id} 
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