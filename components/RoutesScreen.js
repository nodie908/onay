// import { Text, View, StyleSheet } from "react-native";
// import MapView, { Marker } from 'react-native-maps';
// import React from 'react';

// const Details = () => {
//     return (
//         <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: 43.238949,
//             longitude: 76.889709,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker
//             coordinate={{ latitude: 43.238949, longitude: 76.889709 }}
//             title="Almaty"
//             description="Welcome to Almaty, Kazakhstan!"
//           />
//         </MapView>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       flex: 1,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//   });

// export default Details;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const RoutesScreen = () => {
    
  const buttons = Array.from({ length: 100 }, (_, i) => i + 1);
  const [inputValue, setInputValue] = useState('');

  const handleBusInput = (text) => {
    setInputValue(text);
  };

  const filteredButtons = buttons.filter(button => inputValue === '' || button.toString().includes(inputValue));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Алматы > Транспорт > Проезд</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите номер маршрута"
        onChangeText={handleBusInput}
        value={inputValue}
      />
      <View style={styles.tabs}>
        <Text style={styles.tab}>Автобусы</Text>
        <Text style={styles.tab}>Троллейбусы</Text>
      </View>
      <View style={styles.grid}>
        {filteredButtons.map((button) => (
          <View key={button} style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text>{button}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "yellow",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(243, 244, 249)',
  },
  tab: {
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "rgb(243, 244, 249)",
  },
  buttonContainer: {
    width: "25%",
    height: 90,
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoutesScreen;
