import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Ticket from "./Ticket";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TicketsScreen = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const storedTickets = await AsyncStorage.getItem("tickets");
      console.log("Stored Tickets:", storedTickets);

      if (storedTickets) {
        setTickets(JSON.parse(storedTickets));
        console.log("Билеты загружены!");
      }
    } catch (error) {
      console.error("Error loading tickets:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {tickets.map((ticket, index) => {
          console.log("Ticket Data:", ticket); // Add this line for debugging
          return (
            <Ticket
              key={index}
              code={ticket.code}
              time={ticket.time}
              price={ticket.price}
              verificationCode={ticket.verificationCode}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TicketsScreen;
