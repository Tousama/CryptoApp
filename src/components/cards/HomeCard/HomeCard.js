import React from 'react';
import { Text, View } from 'react-native';
import styles from "./HomeCard.style";



const HomeCard = ({ stock }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.stockName}>{stock.symbol}</Text>
            <Text style={styles.stockPrice}>{stock.lastPrice}</Text>
        </View>
    );
};

export default HomeCard;