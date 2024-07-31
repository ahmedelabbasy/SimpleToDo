import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ToDoItem from './ToDoItem';
import {ToDoItem as ToDoItemType} from '../interfaces/ToDoItem';
import theme from '../theme';

interface ToDoListProps {
  items: ToDoItemType[];
  removeToDo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  items,
  removeToDo,
  toggleComplete,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => (
          <ToDoItem
            item={item}
            removeToDo={removeToDo}
            toggleComplete={toggleComplete}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 10,
    padding: 10,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
  },
  contentContainerStyle: {
    gap: 15,
  },
});

export default ToDoList;
