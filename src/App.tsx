import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ToDoItem as ToDoItemType} from './interfaces/ToDoItem';
import theme from './theme';
import strings from './strings.json';
import {initialItems} from './constants';

const App: React.FC = () => {
  const [items, setItems] = useState<ToDoItemType[]>(initialItems);
  const [text, setText] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);

  const enableEditing = useCallback(() => {
    if (!editing) {
      setEditing(true);
    }
  }, [editing, setEditing]);

  const disableEditing = useCallback(() => {
    if (editing) {
      setEditing(false);
    }
  }, [editing, setEditing]);

  const styles = useStyles(editing);

  const addToDo = () => {
    if (text.trim().length > 0) {
      setItems([...items, {id: items.length + 1, text, completed: false}]);
      setText('');
    }
    Keyboard.dismiss();
  };

  const removeToDo = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setItems(
      items.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  const clearCompleted = () => {
    setItems(items.filter(item => !item.completed));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={strings.headerTitle} />
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={strings.inputPlaceholder}
              selectionColor={theme.colors.primary}
              onEndEditing={disableEditing}
              onFocus={enableEditing}
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity style={styles.addButton} onPress={addToDo}>
              <Text style={styles.addButtonText}>{strings.addButton}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        <ToDoList
          items={items}
          removeToDo={removeToDo}
          toggleComplete={toggleComplete}
        />
        <TouchableOpacity style={styles.clearButton} onPress={clearCompleted}>
          <Icon name="clear-all" size={24} color={theme.colors.secondary} />
          <Text style={styles.clearButtonText}>
            {strings.clearCompletedButton}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

function useStyles(editing: boolean) {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginVertical: 20,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 50,
      borderColor: editing ? theme.colors.primary : theme.colors.borderColor,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      backgroundColor: theme.colors.inputBackground,
    },
    addButton: {
      marginLeft: 10,
      backgroundColor: theme.colors.primary,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    addButtonText: {
      color: theme.colors.buttonTextColor,
      fontWeight: 'bold',
    },
    clearButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    clearButtonText: {
      marginLeft: 5,
      color: theme.colors.secondary,
      fontWeight: 'bold',
    },
  });
}

export default App;
