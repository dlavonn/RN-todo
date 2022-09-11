import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const ModalName = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("");

  const RequestCloseHandler = () => {
    Alert.alert("Thanks! " + name + "!");
  };

  const closeModalHandler = () => {
   
    setIsVisible(false);

    props.collectData({
        name: name,
        modalShow: false
    })
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={RequestCloseHandler}
      >
        <View style={styles.modalView}>
          <Text> Please enter your name</Text>
          <TextInput style={styles.textI} onChangeText={setName} value={name} />
          <Button
            title="Enter Name"
            color="purple"
            onPress={closeModalHandler}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textI: {
    borderColor: "black",
    borderWidth: 1,
    margin: 20,
    padding:10,
    width: 250

  },
});
export default ModalName;
