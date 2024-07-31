# SimpleToDo

SimpleToDo is a React Native application that allows users to manage their to-do lists. Users can add, remove, and mark tasks as completed. The app also provides a way to clear all completed tasks.

## Features

- Add new to-do items
- Remove existing to-do items
- Mark to-do items as completed
- Clear all completed items

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) for development with React Native CLI

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmedelabbasy/SimpleToDo.git
   cd SimpleToDo


## Install dependencies:

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### Start the Metro Bundler:

```bash
npx react-native start

```

### Run the app on your emulator or device:

```bash
# For iOS:
npx react-native run-ios

# For Android
npx react-native run-android

```

## Usage

Launch the app on your device or emulator.
Add a new to-do item by typing in the input field and pressing the "ADD" button.
Mark a to-do item as completed by tapping the checkbox.
Remove a to-do item by tapping the delete icon.
Clear all completed items by tapping the "Clear Completed" button.


## Project Structure

SimpleToDo/
├── src/

│   ├── components/

│   │   ├── Header.tsx

│   │   ├── ToDoItem.tsx

│   │   └── ToDoList.tsx

│   ├── interfaces/

│   │   └── ToDoItem.ts

│   ├── constants.ts

│   ├── strings.json

│   ├── theme.ts

│   ├── App.tsx

├── index.js

├── package.json

└── tsconfig.json



### Referance

components/: Contains the React components used in the app.
interfaces/: Contains TypeScript interfaces used in the app.
constants.ts: Contains the initial data for the app.
strings.json: Contains all string literals for easy management and future translation.
theme.ts: Contains the theme colors for the app.
App.tsx: The main app component.
