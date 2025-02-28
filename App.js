
import {useState} from 'react';
import { StyleSheet,
         View,
         FlatList,
         Button
      } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[modalIsVisible, setModalIsVisible] = useState(false);
  const[courseGoals, setCourseGoals] = useState([]);
  
    // Define the startAddGoalHandler function
    function startAddGoalHandler() {
      setModalIsVisible(true); // Show the modal
    }
  
    // Define a function to close the modal
    function endAddGoalHandler() {
      setModalIsVisible(false); // Hide the modal
    }

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [ 
      ...currentCourseGoals, //based on the old course 
      {text: enteredGoalText, id: Math.random().toString()}, //by appending a new goal
    ]);
    endAddGoalHandler(); // Close the modal after adding the goal
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style= "light"/>
      <View style={styles.appContainer}>
        <Button 
          title="Add New Goal" 
          color="#a065ec" 
          onPress={startAddGoalHandler}
          >

          </Button>
        <GoalInput
        visible={modalIsVisible} 
        onAddGoal ={addGoalHandler}
        onCancel={endAddGoalHandler} // Pass the endAddGoalHandler to close the modal
        />
        <View style = {styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem = {(itemData) => {
              return( 
                <GoalItem 
                  text= {itemData.item.text}
                  id = {itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index)=> {
              return item.id;
            }}
            alwaysBounceVertical={false}
          > 
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 5
  },
});
