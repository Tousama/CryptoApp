import React from 'react';
import { Text, View } from 'react-native';
import styles from "./HistoricalDataCard.style";

const HistoricalDataCard = ({ stock }) => {
    const timeStampToDate = (time) => {
        try {
            let date = new Date(time);
            return date.toLocaleTimeString();
        }
        catch {
            console.log("Catche girdi");
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.openPrice}>Open Price</Text>
                <Text style={styles.highPrice}>High Price</Text>
                <Text style={styles.lowPrice}>Low Price</Text>
                <Text style={styles.closePrice}>Close Price</Text>
                <Text style={styles.time}>Time</Text>
            </View>

            <View style={styles.innerContainer}>
                <Text style={styles.openPrice}>{stock[1]}</Text>
                <Text style={styles.highPrice}>{stock[2]}</Text>
                <Text style={styles.lowPrice}>{stock[3]}</Text>
                <Text style={styles.closePrice}>{stock[4]}</Text>
                <Text style={styles.time}>{timeStampToDate(stock[6])}</Text>
            </View>
        </View>
    );
};

export default HistoricalDataCard;