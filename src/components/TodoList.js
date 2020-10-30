import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Colors'

const TodoList = ({list}) => {

    const Completed = list.todos.filter(todo => todo.completed).length ;
    const Remaining = list.todos.length - Completed ;

    return (
        <View style={[ styles.listContainer , { backgroundColor : list.color} ]} >
            <Text style={styles.listTitle} numberOfLines={1} >
                {list.name}
            </Text>

            <View>
                <View style={{alignItems : "center"}}>
                    <Text style={styles.count } >{Remaining}</Text>
                    <Text style={styles.subTitle } >Remaining</Text>
                </View>
                <View style={{alignItems : "center"}}>
                    <Text style={styles.count } >{Completed}</Text>
                    <Text style={styles.subTitle } >Completed</Text>
                </View>
            </View>
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    listContainer : {
        paddingVertical : 32 ,
        paddingHorizontal : 16 ,
        borderRadius : 6 ,
        marginHorizontal : 12 ,
        alignItems : "center" ,
        width : 200 ,
    } ,
    listTitle : 
    {
        fontSize : 25 ,
        fontWeight : "800" , //change this if it is not in bold in mobile phone
        color : colors.white ,
        marginBottom : 18
    },
    count :
    {
        fontSize : 45 ,
        fontWeight : "200" ,
        color : colors.white 
    } ,
    subTitle : 
    {
        fontSize : 12 ,
        fontWeight : "800" ,
        color : colors.white 
    }
})
