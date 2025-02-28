import { useState } from "react";

import { StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image,
} from "react-native";

function GoalInput(props){
    const[enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); //clear it whenever we added a new goal
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style = {styles.inputContainer}>
                <Image 
                    styles= {styles.image} 
                    source={require("../assets/images/goal.png")}
                />

                <TextInput 
                    style = {styles.TextInput} 
                    placeholder = 'Your Course Goal' 
                    onChangeText={goalInputHandler}
                    value = {enteredGoalText}>
                </TextInput>
                <View style={styles.buttonContainer}>
                    <View style= {styles.button}>
                        <Button title = 'Add Goal' onPress={addGoalHandler} color="#5e0acc"/>
                    </View>
                    <View style= {styles.button}>
                        <Button title= "Cancel" onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      },
      TextInput:{
        borderWidth: 1, 
        borderColor: '#e4d0ff', 
        backgroundColor: 'e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
      },
      button:{
        width: '30%',
        marginHorizontal: 8
      }
});