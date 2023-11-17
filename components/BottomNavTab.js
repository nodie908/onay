import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import RoutesScreen from './RoutesScreen';
import CardScreen from './CardScreen';
import CodePayment from './payment/CodePayment';
import TicketsScreen from './tickets/TicketsScreen'; 
import MenuScreen from './MenuScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{
                activeTintColor: "#ffc001",
                labelStyle: {
                    color: 'black',
                }
            }}
        >
            <Tab.Screen
                name="Маршруты"
                component={RoutesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bus" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Карты"
                component={CardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="credit-card" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Платежи"
                component={CodePayment}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-bag" color={color} size={size} />
                    ),
                }}
            />
              <Tab.Screen
                name="Билеты"
                component={TicketsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="ticket" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Меню"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
