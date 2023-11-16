import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const RoutesScreen = () => {
  const [isMap, showMap] = useState(false);
  const buttons = Array.from({ length: 100 }, (_, i) => i + 1);
  const [inputValue, setInputValue] = useState("");

  const handleBusInput = (text) => {
    setInputValue(text);
  };

  const handleMapTouch = () => {
    showMap(!isMap);
  };

  const filteredButtons = buttons.filter(
    (button) => inputValue === "" || button.toString().includes(inputValue)
  );

  return (
    <View style={styles.container}>
      {!isMap ? (
        <>
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleMapTouch}
                >
                  <Text>{button}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </>
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={handleMapTouch}
            >
              <Text>Назад</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 43.238949,
                longitude: 76.889709,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: 43.238949, longitude: 76.889709 }}
                title="Almaty"
                description="Welcome to Almaty, Kazakhstan!"
              />
            </MapView>
          </View>
        </>
      )}
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
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgb(243, 244, 249)",
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
  header: {
    height: 80,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  headerButton: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 40,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    height: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default RoutesScreen;

