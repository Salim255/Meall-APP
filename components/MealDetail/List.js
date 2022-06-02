import {Text, View, StyleSheet} from 'react-native';

export const List = ({selectedMeal}) => {
  return   selectedMeal.map((ingredient) =>
  <View style={styles.listItem} key={ingredient}>
         <Text style={styles.itemText} >{ingredient}</Text>
  </View>
      
     )
  
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497'
    },
    itemText:{
        color: '#351401',
        textAlign: 'center'
    }
})
