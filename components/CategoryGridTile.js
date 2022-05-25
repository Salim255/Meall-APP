import React from 'react'
import { View, Pressable, Text, StyleSheet , Platform} from 'react-native'
import { backgroundColor, shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={styles.gridItem}>
        <Pressable android_ripple={{color: '#ccc'}}
         style={({ pressed }) => 
          [styles.button, pressed ? styles.buttonPressed : null]}
          onPress={onPress}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.titile}>{title} </Text>
            </View>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.os === 'android' ? 'hidden': 'visible'
    },
    button:{
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,

    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    titile:{
        fontWeight: 'bold',
        fontSize:18,
    }
})