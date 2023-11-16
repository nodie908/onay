import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStar as farStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const RoutesScreen = () => {
  const [isMap, showMap] = useState(false);
  const buttons = Array.from({ length: 100 }, (_, i) => i + 1);
  const [inputValue, setInputValue] = useState("");
  const [foundButton, setFoundButton] = useState(null);

  const handleBusInput = (text) => {
    setInputValue(text);
    setFoundButtonActive(text);
  };

  const handleMapTouch = () => {
    showMap(!isMap);
  };

  const filteredButtons = buttons.filter(
    (button) => inputValue === "" || button.toString().includes(inputValue)
  );
  const setFoundButtonActive = (text) => {
    const found = buttons.find((btn) => btn.toString() === text);
    setFoundButton(found);
  };

  return (
    <View style={styles.container}>
      {!isMap ? (
        <>
          <View><Text style={styles.title}>
            <FontAwesomeIcon icon={faLocationDot} /> Алматы
          </Text>
          </View>
          <View style={styles.transportContainer}>
            <View style={styles.underline2}>
              <Text style={styles.transportText}>Транспорт</Text>
            </View>
            <View>
              <Text style={styles.transportTextInactive}>Проезд</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Введите номер маршрута"
              onChangeText={handleBusInput}
              value={inputValue}
            />
            {foundButton && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setInputValue("")}
              >
                <Text style={styles.clearButtonText}>✕</Text>
              </TouchableOpacity>
            )}
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon={farStar} style={{ color: "#a5a4a9" }} />
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>
                <Image
                  style={styles.busimg}
                  source={require("../images/bus2.png")}
                />{" "}
                Автобусы
              </Text>
              <View style={styles.underline}></View>
            </View>
            <View>
              <Text style={styles.tab}>
                <Image
                  style={styles.busimg}
                  source={require("../images/bus.png")}
                ></Image>
                Троллейбусы
              </Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.grid}>
              {filteredButtons.map((button) => (
                <View key={button} style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      foundButton === button && {
                        backgroundColor: "rgb(255, 215, 1)",
                      },
                    ]}
                    onPress={handleMapTouch}
                  >
                    <Text style={styles.btnText}>{button}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
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
  transportText: {
    fontWeight: 'bold'
  },
  transportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignContent: 'center',
    
  },
  tabContainer: {
    alignItems: "center",
  },
  tabText: {
    padding: 10,
  },
  busimg: {
    width: 20,
    height: 20,
  },
  underline: {
    borderBottomColor: "rgb(254, 162, 29)",
    borderBottomWidth: 2,
    width: "100%",
    marginBottom: 5,
  },
  underline2: {
    borderBottomColor: "rgb(254, 162, 29)",
    borderBottomWidth: 2,
    flexBasis: "50%",
    marginBottom: 5,
    alignContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "yellow",
  },
  btnText: {
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
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
    borderRadius: 10,
  },
  mapContainer: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    position: "relative",
  },
  clearButton: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  clearButtonText: {
    color: "yellow",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default RoutesScreen;
