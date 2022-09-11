import { StatusBar } from "expo-status-bar";
import { Children, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ModalName from "./components/modal/Modal";

export default function App() {
  
  const [childObj, setChildObj] = useState({
    name: '',
    modalShow:true
  })
 
  const collectData = (obj) => {
    // Updating object
     setChildObj({ ...childObj, name:obj.name, modalShow: false})
    
  
  }

  return (
    <View style={[ styles.container, childObj.modalShow ?  styles.containerb : styles.containerw]} >
      <ModalName collectData={collectData}/>

      <Text> {childObj.name} Please Enter your Daily Task!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerw: {
    backgroundColor: "#fff",
  },
  containerb: {
    backgroundColor: 'black'
  }

});
