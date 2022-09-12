import { StatusBar } from "expo-status-bar";
import { Children, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable, 
  FlatList
} from "react-native";
import ModalName from "./components/modal/Modal";
import ListStyle from "./components/liststyle/ListStyle";

export default function App() {
  const [enterData, setEnterData] = useState(["Walking dog", "Clean kitchen"])
  const [enterText, setEnterText] = useState("");
  const [childObj, setChildObj] = useState({
    name: "",
    modalShow: true,
  });

  const collectData = (obj) => {
    // Updating object
    setChildObj({ ...childObj, name: obj.name, modalShow: false });
  };

  const AddItemHandlar = () => {

     
    setEnterData( ps =>{

       return [...ps, enterText]
    }
    ) 

    setEnterText('')

  };

  return (
    <View
      style={[
        styles.container,
        childObj.modalShow ? styles.containerb : styles.containerw,
      ]}
    >
      <ModalName collectData={collectData} />

      <Text style={{ position: "absolute", top: 60, fontSize: 16 }}>
        {" "}
        {childObj.name} Please Enter your Daily Task!
      </Text>

      {childObj.name != "" && (
        <View>
          <View style={styles.enterInfo}>
            <TextInput
              style={styles.textI}
              onChangeText={setEnterText}
              value={enterText}
            />
            <Button
              style={styles.btn}
              title="Enter Item"
              color="red"
              onPress={AddItemHandlar}
            />
          </View>
          <View style={styles.tester}>
          <FlatList
        data={enterData}
        renderItem={ ({item, index}) => {

          return (
          <>
          <ListStyle  enterData={item} />
          </>

          )
        }}
      
      />
            </View>

     



       
    
        </View>     
      )}
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
    backgroundColor: "black",
  },
  enterInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  textI: {
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
    width: 250,
  },
  btn: {
    width: "20px !important",
    height: 55,
    paddingHorizontal: 19,
  },
  tester:{
    flexDirection: "column"
  }
});
