import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../theme';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: theme.colors.headerBackground,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderColor,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.headerText,
  },
  underline: {
    width: '100%',
    height: 4,
    backgroundColor: theme.colors.underlineColor,
    position: 'absolute',
    bottom: 0,
  },
});

export default Header;
