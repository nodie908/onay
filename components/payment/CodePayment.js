import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const styles = {

    card: {
        marginTop: 10,
        height: '30%',
        backgroundColor: '#ffc001',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    cardIconContainer: {
        width: '12%',
        backgroundColor: 'black',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: '100%',
    },
    cardIcon: {
        color: '#ffc001',
        fontWeight: 'bold',
        fontSize: 20,
        transform: [{ rotate: '-90deg' }],
        width: '220%',
        position: 'absolute',
        left: '-25px',
        bottom: '45px'

    },
    cardInfoContainer: {
        width: '86%',
        justifyContent: 'space-around',
    },
    container: {
        flex: 1,
        padding: 16,
    },

}

const CodePayment = () => {
    const [cardName, setCardName] = useState('');
    const [lastDigits, setLastDigits] = useState('');
    const [amount, setAmount] = useState('');
    const [trips, setTrips] = useState('');
    const [code, setCode] = useState('');
    const [isPaymentVisible, setIsPaymentVisible] = useState(true);
    const [tickets, setTickets] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        loadCardData();
    }, []);

    const loadCardData = async () => {
        try {
            const storedData = await AsyncStorage.getItem('cardData');
            if (storedData) {
                const { cardName, lastDigits, amount, trips } = JSON.parse(storedData);
                setCardName(cardName);
                setLastDigits(lastDigits);
                setAmount(amount);
                setTrips(Math.floor(amount / 100));
            }
        } catch (error) {
            console.error('Error loading card data:', error);
        }
    };

    const handlePaymentButtonClick = () => {

        setIsPaymentVisible(false);

    }

    const handleConfirmationButtonClick = async () => {
        const newTicket = {
            code: code, 
            time: new Date().toLocaleTimeString(),
            price: 100,
            verificationCode: generateVerificationCode(),
        };

        // Обновление состояния билетов
        setTickets([...tickets, newTicket]);

        try {
            // Сохранение обновленного списка билетов в AsyncStorage
            await AsyncStorage.setItem('tickets', JSON.stringify([...tickets, newTicket]));
        } catch (error) {
            console.error('Error saving ticket:', error);
        }
    };

    const generateVerificationCode = () => {
        // Генерация кода проверки, например, случайной буквы и четырех случайных цифр
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const randomDigits = Math.floor(1000 + Math.random() * 9000);

        return randomLetter + randomDigits;
    };

    const saveTicket = async (ticket) => {
        try {
            // Получение текущего списка билетов из AsyncStorage
            const storedTickets = await AsyncStorage.getItem('tickets');
            const existingTickets = storedTickets ? JSON.parse(storedTickets) : [];

            // Добавление нового билета к текущему списку
            const updatedTickets = [...existingTickets, ticket];

            // Сохранение обновленного списка билетов в AsyncStorage
            await AsyncStorage.setItem('tickets', JSON.stringify(updatedTickets));
        } catch (error) {
            console.error('Error saving ticket:', error);
        }
    }

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontWeight: 700, fontSize: 16 }}>Оплатить по коду</Text>

                <Text style={{ marginTop: 25, fontSize: 12, color: 'grey' }}>Карта, с которой будут списаны деньги</Text>

            </View>

            <View style={styles.card}>

                <View style={styles.cardIconContainer}>
                    <Text style={styles.cardIcon}>Единая</Text>
                </View>

                <View style={styles.cardInfoContainer}>

                    <View style={{ flexDirection: 'row', marginLeft: '10px' }}>

                        <Text style={{ width: '70%', fontWeight: 'bold' }}>
                            {cardName}
                        </Text>

                        <Text
                            style={{ width: '28%', textAlign: 'right' }}>{lastDigits}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ width: '75%', marginLeft: '10px' }}>

                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ fontSize: 25, fontWeight: 'bold', marginRight: 6 }}>{`\u20B8`}</Text>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', width: '85%' }}>{amount}</Text>

                            </View>

                            <Text style={{ color: 'red', fontWeight: '600' }}>~{trips} поездок, Алматы</Text>

                        </View>

                    </View>

                </View>

            </View>

            {/* Payment */}
            {isPaymentVisible && (

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', marginBottom: 15 }}>Введите код*</Text>

                    <TextInput
                        style={{ width: "75%", fontWeight: "100", borderBottomWidth: 1, borderColor: 'grey', fontSize: 26, textAlign: 'center', padding: 5, color: 'grey', letterSpacing: 6 }}
                        value={code}
                        onChangeText={(text) => {
                            setCode(text);
                        }}
                    />

                    <TouchableOpacity style={{ marginTop: 20, padding: 10, borderRadius: 25, backgroundColor: '#ffc001', width: '75%', }}>
                        <Text style={{ textAlign: 'center' }} onPress={handlePaymentButtonClick}>Оплатить</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20, padding: 10, border: "1px black dashed", borderRadius: 25, width: '75%', }}>
                        <Text style={{ textAlign: 'center' }}>Как платить?</Text>
                    </TouchableOpacity>

                    <Text style={{ width: '60%', fontSize: 12, color: 'grey', marginTop: 20 }}>*Код транспортного средства, товара или услуги указан на терминале ONAY!
                        <br></br>либо на кассе.</Text>

                </View>

            )}


            {/* Confirmation */}
            {!isPaymentVisible && (

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                    <Text style={{ textAlign: 'center', color: 'grey' }}>Сумма оплаты</Text>

                    <Text
                        style={{ width: "75%", fontWeight: "600", fontSize: 26, textAlign: 'center', padding: 5, }}
                    >
                        100,00{`\u20B8`}
                    </Text>


                    <Text style={{ textAlign: 'center', color: 'grey' }}>
                        Маршрут
                    </Text>

                    <Text style={{ width: "75%", fontWeight: "600", fontSize: 26, textAlign: 'center', padding: 5, }}>
                        <FontAwesome name="bus" style={{ marginRight: 5, fontSize: 26 }} />
                        {code}
                        <Text style={{ padding: 5, backgroundColor: '#00000015', fontSize: 18, marginLeft: 12 }}>  585YM02
                        </Text>
                    </Text>

                    <TouchableOpacity style={{ marginTop: 20, padding: 10, borderRadius: 25, backgroundColor: '#ffc001', width: '75%', }}
                        onPress={handleConfirmationButtonClick}
                    >
                        <Text style={{ textAlign: 'center' }}>Подтвердить</Text>
                    </TouchableOpacity>


                </View>

            )}



        </View>
    );
};

export default CodePayment;
