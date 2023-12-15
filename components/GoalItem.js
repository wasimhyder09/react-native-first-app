import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#2106644' }}
        onPress={props.onPress.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: '#ffffff'
  }
});