import {View, Text, StyleSheet} from 'react-native';

export const Subtitle = ({children}) => {
  return (
    <View style={styles.subtilteContainer}>
       <Text style={styles.subtilte}>{children}</Text>
    </View>
  )
}


const styles =  StyleSheet.create({
    subtilte:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       
       
      
      }
      ,
      subtilteContainer:{
        borderBottomColor:  '#e2b497',
        borderBottomWidth: 2,
        padding:6,
        marginHorizontal: 12,
        marginVertical: 4
      }
})