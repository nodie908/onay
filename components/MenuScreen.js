import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from "react-native";

const MenuScreen = () => {
  const [isEnabledNotifications, setIsEnabledNotifications] = useState(false);
  const toggleSwitchNotifications = () =>
    setIsEnabledNotifications((previousState) => !previousState);

  const [isEnabledBiometrics, setIsEnabledBiometrics] = useState(false);
  const toggleSwitchBiometrics = () =>
    setIsEnabledBiometrics((previousState) => !previousState);

  return (
    <ScrollView style={styles_menu.cont}>
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
            style={styles_menu.angle_right}
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
            style={styles_menu.angle_right}
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
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>
      </View>

      {/* НАСТРОЙКИ ПРИЛОЖЕНИЯ */}
      <View style={[styles_menu.settings_app, styles_menu.gap_vertical]}>
        <Text style={styles_menu.h1}>Настройки приложения</Text>

        {/* УВЕДОМЛЕНИЯ И ЗВУКИ */}
        <TouchableOpacity style={styles_menu.angle_switch} onPress={() => {}}>
          <Text>Уведомления и звуки</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#ffc00173" }}
            thumbColor={isEnabledNotifications ? "rgb(255 160 1)" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchNotifications}
            value={isEnabledNotifications}
          />
        </TouchableOpacity>

        {/* СМЕНИТЬ ЯЗЫК */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Сменить язык</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>
      </View>

      {/* КОД ДОСТУПА */}
      <View style={[styles_menu.access_сode, styles_menu.gap_vertical]}>
        <Text style={styles_menu.h1}>Код доступа</Text>

        {/* ВХОД ПО БИОМЕТРИИ */}
        <TouchableOpacity style={styles_menu.angle_switch} onPress={() => {}}>
          <Text>Вход по биометрии</Text>
          <Switch
        //   rgb(255 160 1)
            trackColor={{ false: "#767577", true: "#ffc00173" }} 
            thumbColor={isEnabledBiometrics ? "rgb(255 160 1)" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchBiometrics}
            value={isEnabledBiometrics}
          />
        </TouchableOpacity>

        {/* ИЗМЕНИТЬ КОД ДОСТУПА */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Изменить код доступа</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>
      </View>

      {/* ЛИЧНЫЕ ДАННЫЕ */}
      <View style={[styles_menu.personal_data, styles_menu.gap_vertical]}>
        <Text style={styles_menu.h1}>Личные данные</Text>

        {/* НОМЕР ТЕЛЕФОНА */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Номер телефона</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* E-MAIL */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>E-mail</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ПАРОЛЬ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Пароль</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* УДАЛИТЬ АККАУНТ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text style={{ color: "red" }}>Удалить аккаунт</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>
      </View>

      {/* ДОСТУП */}
      <View style={[styles_menu.access, styles_menu.gap_vertical]}>
        <Text style={styles_menu.h1}>Доступ</Text>

        {/* ПОВЫШЕННЫЙ ДОСТУП */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Повышенный доступ</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ЛИМИТЫ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Лимиты</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>
      </View>

      {/* БЕЗОПАСНОСТЬ */}
      <View style={[styles_menu.safety, styles_menu.gap_vertical]}>
        <Text style={styles_menu.h1}>Безопасность</Text>

        {/* КОДОВОЕ СЛОВО */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Повышенный доступ</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ПИН-КОД ДЛЯ POS ТЕРМИНАЛОВ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>ПИН-код для POS-терминалов</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ПАРОЛЬ ДЛЯ ОНЛАЙН-ПЛАТЕЖЕЙ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Пароль для онлайн-платежей</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>
      </View>

      {/* О ПРИЛОЖЕНИИ */}
      <View style={[styles_menu.about_application, styles_menu.gap_vertical]}>
        <Text style={styles_menu.h1}>О приложении</Text>

        {/* ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Пользовательское соглашение</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Политика конфиденциальности</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ОЦЕНИТЬ ПРИЛОЖЕНИЕ */}
        <TouchableOpacity style={styles_menu.angle_text} onPress={() => {}}>
          <Text>Оценить приложжение</Text>
          <FontAwesome
            name="angle-right"
            size={30}
            style={styles_menu.angle_right}
          />
        </TouchableOpacity>

        {/* ВЕРСИЯ */}
        <Text style={styles_menu.angle_text}>Версия: 2.7.20</Text>

        {/* ВЫЙТИ */}
        <TouchableOpacity
          style={[styles_menu.angle_text, { marginTop: "7%" }]}
          onPress={() => {}}
        >
          <Text>Выйти</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles_menu = StyleSheet.create({
  // MAIN CONT
  cont: {
    flexDirection: "column",
  },
  gap_vertical: {
    marginVertical: "3%",
  },
  angle_right: {
    marginLeft: "auto",
    color: "grey",
  },
  angle_switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 7,
    paddingHorizontal: 15,
  },
  angle_text: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 7,
    paddingHorizontal: 15,
  },
  h1: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 13,
    paddingHorizontal: 15,
  },
  // BUTTONS HEADER
  buttons_header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
    marginBottom: "8%",
    paddingHorizontal: 10,
  },
  buttons_header_view_img: {
    width: 35,
    height: 35,
    marginRight: 10,
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
