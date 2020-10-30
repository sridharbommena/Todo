import React, { useState } from 'react'
import { FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Colors';

const TodoModel = ({list , close }) => {
    const name = list.name ;
    const color = list.color ;
    const todos = list.todos ;

    const taskCount = todos.length ;
    const completedCount = todos.filter(todo => todo.completed).length ;


    const renderTodo = todo =>
    {
        return(
            <View style={styles.todoContainer} >
                <TouchableOpacity >
                   <Ionicons name= {todo.completed ? "ios-square" : "ios-square-outline" } 
                   size={24} 
                   color={colors.grey}
                   style={{ width : 32 }}
                   />
                </TouchableOpacity>

                <Text 
                style={[styles.todo , {color : todo.completed ? colors.grey : colors.black ,
                textDecorationLine : todo.completed ? "line-through" : "none"  }]}
                >
                    {todo.title}
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
           
           <TouchableOpacity style={{position : "absolute" , top : 25 , right : 25 , zIndex : 100 }}
            onPress={close}
            >
                <AntDesign name="close" size={26} color={colors.black} />
           </TouchableOpacity>

            <View style={[styles.section ,styles.header , {borderBottomColor : color } ]} >
                <View>
                    <Text style={styles.title } >{name}</Text>
                    <Text style={styles.taskCount } >
                    {completedCount} of {taskCount } tasks
                    </Text>
                </View>
            </View>

            <View style={[styles.section , {flex : 3}]} >
                <FlatList data={todos} 
                renderItem={ ({item}) => renderTodo(item) }
                keyExtractor = { item => item.title }
                contentContainerStyle = {{paddingHorizontal : 32 , paddingVertical : 64}}
                showsVerticalScrollIndicator = {false}
                />
            </View>

            <KeyboardAvoidingView style={[styles.section , styles.footer ]} >
                <TextInput style={[styles.input , { borderColor : color }]} />
                <TouchableOpacity style={[styles.addTodo , {backgroundColor : color }]} >
                    <AntDesign name="plus" size={16} color={colors.white} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default TodoModel

const styles = StyleSheet.create({
    container :
    {
        flex : 1 ,
        justifyContent : "center" ,
        alignItems : "center"
    },
    section :
    {
        flex : 1 ,
        alignSelf : "stretch"
    },
    header :
    {
        justifyContent : "flex-end" ,
        marginLeft : 64 ,
        borderBottomWidth : 3 ,
    },
    title :
    {
        fontSize : 30 ,
        fontWeight : "bold" ,
        color : colors.black 
    } ,
    taskCount :
    {
        marginTop : 10 ,
        color : colors.grey ,
        fontWeight : "bold"
    },
    footer :
    {
        paddingHorizontal : 32 ,
        flexDirection : "row" ,
        alignItems : "center" ,
    },
    input :
    {
        flex : 1 ,
        height : 48 ,
        borderWidth : 2 ,
        borderRadius : 6 ,
        marginRight : 8 ,
        paddingHorizontal :8 ,
    },
    addTodo :
    {
        borderRadius : 4 ,
        padding : 16 ,
        alignItems : "center" ,
        justifyContent : "center"
    },
    todoContainer :
    {
        paddingVertical : 16 ,
        flexDirection : "row" ,
        alignItems : "center",
    },
    todo:
    {
        color : colors.black ,
        fontWeight : "bold" ,
        fontSize : 16 ,
    }
})
