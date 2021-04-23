import React from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const SettingsScreen = (props) => {

  const items = [
    { id: 1, title: 'Account', icon: 'account-circle-outline' },
    { id: 2, title: 'Notifications', icon: 'bell-circle-outline' },
    { id: 3, title: 'Appearance', icon: 'eye-circle-outline' },
    { id: 4, title: 'Privacy & Security', icon: 'lock-outline' },
    { id: 5, title: 'Help and Support', icon: 'headphones' },
    { id: 6, title: 'About', icon: 'help-circle-outline' },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Settings
        </Text>
      </View>
      <View>
        <View style={styles.inputSearchContainer}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            style={styles.inputSearch}
            placeholder="Ingresa tu DNI"
          />
        </View>
        <View style={styles.settingsList}>
          <FlatList
            data={items}
            renderItem={({ item }) => {
              return (
                <View style={styles.listItem}>
                  <View style={styles.listSettingsItems}>
                    <MaterialCommunityIcons name={item.icon} size={30} color="black" />
                    <Text style={styles.settingItem}>
                      {item.title}
                    </Text>
                    <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                  </View>
                  <View
                    style={{
                      borderBottomColor: '#cccccc',
                      borderBottomWidth: 1,
                      paddingTop: 5
                    }}
                  />
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Contenedor
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 20
  },
  titleContainer: {
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },

  // Input de busqueda
  inputSearchContainer: {
    padding: 5,
    backgroundColor: '#e3e3e3',
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSearch: {
    flex: 1,
    color: 'black',
  },
  // settingsList
  listSettingsItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    paddingBottom: 20,
  },
  settingItem: {
    flex: 1,
    paddingLeft: 10
  }
});