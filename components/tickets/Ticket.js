// Ticket.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ticket = ({ code, time, price, verificationCode }) => {
  return (
    <View style={styles.ticketContainer}>
      <Text style={{ fontWeight: 'bold' }}>Автобус</Text>
      <Text style={{ color: "gray" }}>Алматы</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

        <Text style={{ width: '60%' }}>Маршрут: </Text> <Text style={{ width: '38%' }}>{code}</Text>
        <Text style={{ width: '60%' }}>Время: </Text> <Text style={{ width: '38%' }}>{time}</Text>
        <Text style={{ width: '60%' }}>Цена: </Text> <Text style={{ width: '38%' }}>{price}</Text>
        <Text style={{ width: '60%' }}>Код проверки: </Text> <Text style={{ width: '38%' }}>{verificationCode}</Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginLeft: "5%"
  },
});

export default Ticket;
