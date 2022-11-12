import React from 'react';
import { Text, View } from 'react-native';
import styles from "./HistoricalDataCard.style";
//ÖNEMLİ! filtreleme yaptıktan sonra klavye kapanınca filtrelemede sıkıntı oluyor!!!
const HistoricalDataCard = ({stock}) => {
    const timeStampToDate = (time) => {
        try {
            let date = new Date(time);
            return date.toLocaleTimeString();
        }
        catch {
            console.log("Catche girdi");
        }
    };
    /* console.log("OK");  */
    return(
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
            
            {/* <Text>{stock[0].symbol}</Text>
            <Text>{stock[0].lastPrice}</Text>
            <Text>{stock[0].priceChangePercent}</Text>
            <Text>{stock[0].lastQty}</Text>
            <Text>{stock[0].bidPrice}</Text>
            <Text>{stock[0].bidQty}</Text>
            <Text>{stock[0].askPrice}</Text>
            <Text>{stock[0].askQty}</Text>
            <Text>{stock[0].highPrice}</Text>
            <Text>{stock[0].lowPrice}</Text>
            <Text>{stock[0].volume}</Text>
            <Text>{stock[0].count}</Text>
            <Text>{timeStampToDate(stock[0].closeTime)}</Text> */}
        </View>
    );
};

export default HistoricalDataCard;