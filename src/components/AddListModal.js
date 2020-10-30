import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../Colors';
import tempData from '../tempData';

const AddListModal = ({close}) => {

   const backgroundColors = ["#5CD859" , "#24A6D9" , "#595BD9" , "#595BD9" , "#8022D9" , "#D159D8" , "#D85963" , "#D88559"];

    const [ name , setName ] = useState("");
    const [ color , setColor ] = useState(backgroundColors[1]);


    const renderColors = () =>
    {
        return backgroundColors.map( color =>
            {
                return (
                    <TouchableOpacity key={color} style={[styles.colorSelect , {backgroundColor : color}]} 
                    onPress={ ()=> setColor(color) }
                    />
                )
            }
            )
    }

const createTodo = () =>
{
    console.log("entered")
  tempData.push({
      name,
      color ,
      todos : []
  });
  setName("");
  close();
}


    return (
        <KeyboardAvoidingView style={styles.container}  >
            <TouchableOpacity 
            style={{position : "absolute" , top : 25 , right : 25 }}
            onPress={close}
            >
                <AntDesign name="close" size={26} color={colors.black} />
            </TouchableOpacity>

            <View style={{alignSelf : "stretch" , marginHorizontal : 32 }} >
                    <Text style={styles.title} >Create Todo List</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder="List Name"
                    onChangeText = { text => setName(text) }
                    value={name}
                    autoFocus={true}
                    />
                    <View style={{flexDirection : "row" , justifyContent: "space-between" , marginTop : 12}} >
                        {renderColors()}
                    </View>
                    <TouchableOpacity style={[styles.create, {backgroundColor : color }]} onPress={createTodo} >
                        <Text style={{color : colors.white , fontWeight : "700" }} >Create!</Text>
                    </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddListModal

const styles = StyleSheet.create({
    container :
    {
        flex : 1 ,
        justifyContent : "center" ,
        alignItems : "center"
    },
    title : 
    {
        fontSize : 28 ,
        fontWeight : "bold" ,
        color : colors.black ,
        alignSelf : "center" ,
        marginBottom : 16
    },
    input : 
    {
        borderWidth : 1.5 ,
        borderColor : colors.blue ,
        borderRadius : 6 ,
        height : 50 ,
        marginTop : 8 ,
        paddingHorizontal : 16 ,
        fontSize : 18
    },
    create : 
    {
        marginTop : 24 ,
        height : 50 ,
        borderRadius : 6 ,
        alignItems : "center" ,
        justifyContent : "center"
    },
    colorSelect :
    {
        width : 30 ,
        height : 30 ,
        borderRadius :4
    }
})
