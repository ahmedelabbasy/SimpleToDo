import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ToDoItem as ToDoItemType} from '../interfaces/ToDoItem';
import theme from '../theme';

interface ToDoItemProps {
  item: ToDoItemType;
  removeToDo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  item,
  removeToDo,
  toggleComplete,
}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleComplete(item.id)}>
        <Icon
          name={item.completed ? 'check-circle' : 'radio-button-unchecked'}
          size={24}
          color={
            item.completed
              ? theme.colors.checkbox
              : theme.colors.textColorSecondary
          }
        />
      </TouchableOpacity>
      <View style={styles.itemTextContainer}>
        <Text
          style={[styles.itemText, item.completed && styles.itemTextCompleted]}>
          {item.text}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => removeToDo(item.id)}>
        <Icon name="delete" size={24} color={theme.colors.delete} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    flex: 1,
  },
  checkbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemTextContainer: {
    flex: 6,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: theme.colors.textColor,
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    color: theme.colors.textColorSecondary,
  },
  delete: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default ToDoItem;
