import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from "./ListCard.style";

const ListCard = ({stock, onSelect}) => {
    const timeStampToDate = (time) => {
        try {
            let date = new Date(time);
            return date.toLocaleTimeString();
        }
        catch {
            console.log("Catche girdi");
        }
    };
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.stockName}>{stock.symbol}</Text>
                <Text style={styles.stockPrice}>{stock.lastPrice}</Text>
                {stock.priceChangePercent > 0 && <Text style={styles.stockChangePercentGreen}>{stock.priceChangePercent}%</Text>}
                {stock.priceChangePercent < 0 && <Text style={styles.stockChangePercentRed}>{stock.priceChangePercent}%</Text>
                }
                {stock.priceChangePercent == 0 && <Text style={styles.stockChangePercent}>{stock.priceChangePercent}%</Text>}
                <Text style={styles.stockVolume}>{stock.volume}</Text>
                <Text style={styles.stockTime}>{timeStampToDate(stock.openTime)}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    );
};

export default ListCard;