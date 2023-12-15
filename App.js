import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showInput, setShowInput] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ]);
    hideInputHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function showIputHandler() {
    setShowInput(true);
  }

  function hideInputHandler() {
    setShowInput(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add new Goal' color='#5e0acc' onPress={showIputHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={showInput} hide={hideInputHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem onPress={deleteGoalHandler} item={itemData.item.text} id={itemData.item.id} />
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5
  }
});
