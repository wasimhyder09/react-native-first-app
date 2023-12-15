import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.item}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  goalText: {
    color: '#ffffff'
  }
});