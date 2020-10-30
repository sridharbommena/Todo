import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import TodoModel from './TodoModel';

const TodoList = ({list}) => {

    const [ visible , setVisible ] = useState(false);


    const Completed = list.todos.filter(todo => todo.completed).length ;
    const Remaining = list.todos.length - Completed ;

    return (
        <View>
            <Modal animationType="slide" visible={visible} onRequestClose={()=>setVisible(false)}>
                <TodoModel list={list} close = {()=>setVisible(false)} />
            </Modal>
        <TouchableOpacity style={[ styles.listContainer , { backgroundColor : list.color} ]} 
        onPress={()=>setVisible(true)}
        >
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
        </TouchableOpacity>
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
