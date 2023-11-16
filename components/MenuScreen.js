import { FontAwesome } from "@expo/vector-icons";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const MenuScreen = () => {
  return (
    <View style={styles_menu.cont}>
      {/* HEADER */}
      <View>
        {/* МОЙ ГОРОД */}
        <TouchableOpacity style={styles_menu.buttons_header} onPress={() => {}}>
          <View style={styles_menu.buttons_header_view_img}>
            <Image
              source={require("../images/onay_menu_angle.png")}
              style={styles_menu.icons}
            />
          </View>
          <View style={styles_menu.button_header_view}>
            <Text style={{ fontWeight: "500" }}>Мой город</Text>
            {/* TODO: Доделать функцию */}
            <Text style={{ color: "grey" }}>Алматы</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.button_header_angleRight}
          />
        </TouchableOpacity>

        {/* КОЛЛ-ЦЕНТР */}
        <TouchableOpacity style={styles_menu.buttons_header} onPress={() => {}}>
          <View style={styles_menu.buttons_header_view_img}>
            <Image
              source={require("../images/onay_menu_phone.png")}
              style={styles_menu.icons}
            />
          </View>
          <View style={styles_menu.button_header_view}>
            <Text style={{ fontWeight: "500" }}>Колл-центр</Text>
            {/* TODO: Доделать функцию */}
            <Text style={{ color: "grey" }}>Позвонить нам</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.button_header_angleRight}
          />
        </TouchableOpacity>

        {/* ТОЧКИ ОБСЛУЖИВАНИЯ */}
        <TouchableOpacity style={styles_menu.buttons_header} onPress={() => {}}>
          <View style={styles_menu.buttons_header_view_img}>
            <Image
              source={require("../images/onay_menu_geolocation.png")}
              style={styles_menu.icons}
            />
          </View>
          <View style={styles_menu.button_header_view}>
            <Text style={{ fontWeight: "500" }}>Точки обслуживания</Text>
            {/* TODO: Доделать функцию */}
            <Text style={{ color: "grey" }}>Показать на карте</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.button_header_angleRight}
          />
        </TouchableOpacity>
      </View>

      {/* НАСТРОЙКИ ПРИЛОЖЕНИЯ */}
      <View style={styles_menu.settings_app}></View>
      {/* КОД ДОСТУПА */}
      <View style={styles_menu.access_сode}></View>
      {/* ЛИЧНЫЕ ДАННЫЕ */}
      <View style={styles_menu.personal_data}></View>
      {/* ДОСТУП */}
      <View style={styles_menu.access}></View>
      {/* БЕЗОПАСНОСТЬ */}
      <View style={styles_menu.safety}></View>
      {/* О ПРИЛОЖЕНИИ */}
      <View style={styles_menu.about_application}></View>
    </View>
  );
};

const styles_menu = StyleSheet.create({
  // MAIN CONT
  cont: {
    flexDirection: "column",
  },
  // BUTTONS HEADER
  buttons_header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  buttons_header_view_img: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  button_header_view: {
    flex: 1,
  },
  button_header_angleRight: {
    marginLeft: "auto",
    color: "grey",
  },
  icons: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  // НАСТРОЙКИ ПРИЛОЖЕНИЯ
  settings_app: {},
  // КОД ДОСТУПА
  access_сode: {},
  // ЛИЧНЫЕ ДАННЫЕ
  personal_data: {},
  // ДОСТУП
  access: {},
  // БЕЗОПАСНОСТЬ
  safety: {},
  // О ПРИЛОЖЕНИИ
  about_application: {},
});

export default MenuScreen;
