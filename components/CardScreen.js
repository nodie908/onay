import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation } from '@react-navigation/native';



const styles = {
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
    },
    headerButton: {
        width: '50%',
    },
    card: {
        marginTop: 16,
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
    editInput: {
        borderColor: 'gray',

        borderRadius: 5,
        padding: 5,
        marginTop: 8,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    actionButton: {
        width: '30%',
    },
    touchable: {
        border: '1px black solid',
        borderRadius: 25,
        textAlign: 'center',
        padding: 25
    },
    touchableOrange: {
        border: '1px black solid',
        borderRadius: 25,
        textAlign: 'center',
        padding: 25,
        backgroundColor: '#ffc001'
    },
};

const Stack = createStackNavigator();

const CardScreenContent = () => {

    const navigation = useNavigation();

    const [cardName, setCardName] = useState('');
    const [lastDigits, setLastDigits] = useState('');
    const [amount, setAmount] = useState('');
    const [trips, setTrips] = useState('');

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
            console.error('errror', error)
        }
    };

    const saveCardData = async () => {
        try {
            const cardData = { cardName, lastDigits, amount };
            await AsyncStorage.setItem('cardData', JSON.stringify(cardData));
        } catch (error) {
            console.error('error', error);
        }
    };

    const handleButtonClick = () => {
        navigation.navigate('Платежи');
    };

    const handleTicketClick = () => {
        navigation.navigate('Билеты')
    }

    return (


        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity style={styles.headerButton} onPress={() => console.log('Мои карты')}>
                    <Text style={{ textAlign: 'center', borderBottomWidth: 2, borderBottomColor: '#ffc001', paddingBottom: 10, fontWeight: 'bold' }}>Мои карты</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.headerButton} onPress={() => console.log('Другие карты')}>
                    <Text style={{ textAlign: 'center', paddingBottom: 10 }}>Другие карты</Text>
                </TouchableOpacity>

            </View>

            {/* САМА КАРТА */}

            <View style={styles.card}>

                <View style={styles.cardIconContainer}>
                    <Text style={styles.cardIcon}>Единая</Text>

                </View>

                <View style={styles.cardInfoContainer}>

                    <View style={{ flexDirection: 'row', marginLeft:"10px" }}>
                        <TextInput
                            style={{ width: "70%", fontWeight: "bold" }}
                            placeholder="Название карты"
                            value={cardName}
                            onChangeText={(text) => setCardName(text)}
                        />

                        <TextInput
                            style={{ width: "28%", textAlign: 'right', marginRight:"15px" }}
                            placeholder="Последние 4 цифры"
                            value={lastDigits}
                            onChangeText={(text) => setLastDigits(text)}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: '10px' }}>

                        <View style={{ width: '75%' }}>


                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', marginRight: 6 }}>{`\u20B8`}</Text>
                                <TextInput
                                    style={{ fontSize: 25, fontWeight: 'bold', width: '85%' }}
                                    placeholder="Доступная сумма"
                                    value={amount}
                                    onChangeText={(text) => {
                                        setAmount(text);
                                        setTrips(Math.floor(Number(text) / 100));
                                    }}
                                    keyboardType="numeric"
                                />
                            </View>

                            <Text style={{ color: 'red', fontWeight: '600' }}>~{trips} поездок, Алматы</Text>

                        </View>

                        <View style={{ width: '20%' }}>
                            <TouchableOpacity onPress={saveCardData}>
                                < FontAwesome name="angle-right" size={40} style={{}} />
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>

            {/* 6 КНОПОК */}

            <View style={styles.actionButtons}>

                <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Пополнить')}>
                    < FontAwesome name="id-card-o" size={55} style={styles.touchable} />

                    <Text style={{ textAlign: 'center' }}>Пополнить</Text>

                </TouchableOpacity>



                <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Перевести')}>

                    < FontAwesome name="refresh" size={55} style={styles.touchable} />
                    <Text style={{ textAlign: 'center' }}>Перевести</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={() => console.log('История поездок')}>

                    < FontAwesome name="history" size={55} style={styles.touchable} />
                    <Text style={{ textAlign: 'center' }}>История</Text>

                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>

                <TouchableOpacity style={styles.actionButton} onPress={handleButtonClick}>

                    <FontAwesome name="mobile-phone" size={55} style={styles.touchable} />

                    <Text style={{ textAlign: 'center' }}>Оплатить по коду</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleButtonClick}>

                    < FontAwesome name="qrcode" size={55} style={styles.touchableOrange} />
                    <Text style={{ textAlign: 'center' }}>Onay QR</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleTicketClick}>

                    < FontAwesome name="ticket" size={55} style={styles.touchable} />

                    <Text style={{ textAlign: 'center' }}>Мои билеты</Text>

                </TouchableOpacity>
            </View>
        </View>

    );
};


export default CardScreenContent;
