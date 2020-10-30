import React, { useState } from 'react';
import { StyleSheet, Text, View  ,  StatusBar, TouchableOpacity, FlatList, Modal} from 'react-native';
import { colors } from './src/Colors';
import { AntDesign } from '@expo/vector-icons';
import TodoList from './src/components/TodoList';
import AddListModal from './src/components/AddListModal';
import tempData from './src/tempData';

export default function App() {


const [ visible , setVisible ] = useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={visible} onRequestClose={()=> setVisible(false)} >
        <AddListModal close={()=>setVisible(false)} />
      </Modal>
      <View style={{ flexDirection : "row"}} >
        <View style={styles.divider} />
        <Text style = { styles.title } >
          Todo <Text style={{fontWeight : "800" , color : colors.blue }} >Lists</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{marginVertical : 48 }} >
        <TouchableOpacity style={styles.addList} onPress={()=>setVisible(true)} >
        <AntDesign name="plus" size={24} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add} >Add Lists</Text>
      </View>
      
      <View style={{height : 285 , paddingLeft : 32 }} >
        <FlatList 
         data={tempData}
         keyExtractor = { item => item.name }
         horizontal = {true}
         showsHorizontalScrollIndicator = {false}
         renderItem = {({item}) => <TodoList list={item} />  }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider : 
  {
    backgroundColor : colors.lightblue ,
    height : 1 ,
    flex : 1 ,
    alignSelf : "center"
  },
  title :
  {
    fontSize : 32 ,
    fontWeight : "bold" ,
    color : colors.black ,
    paddingHorizontal : 60
  } ,
  addList :
  {
    borderWidth : 2 ,
    borderColor : colors.blue ,
    borderRadius : 4 ,
    padding : 14 ,
    alignItems : "center" ,
    justifyContent : "center"
  },
   add : {
     color : colors.blue ,
     fontWeight : "bold" , 
     fontSize : 14 ,
     marginTop : 8
   },
});
