import React from 'react';
import { Text, View } from 'react-native';
import styles from "./PriceCard.style";

const PriceCard = ({stock}) => {
    const timeStampToDate = (time) => {
        try {
            let date = new Date(time);
            return date.toLocaleTimeString();
        }
        catch {
            console.log("Catche girdi");
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.symbol}>Symbol</Text>
                <Text style={styles.lastPrice}>Last Price</Text>
                <Text style={styles.priceChange}>Price Change</Text>
                <Text style={styles.lastQty}>Last Qty</Text>
                <Text style={styles.bidPrice}>Bid Price</Text>
                <Text style={styles.bidQty}>Bid Qty</Text>
                <Text style={styles.askPrice}>Ask Price</Text>
                <Text style={styles.askQty}>Ask Qty</Text>
                <Text style={styles.highPrice}>High Price</Text>
                <Text style={styles.lowPrice}>Low Price</Text>
                <Text style={styles.volume}>Volume</Text>
                <Text style={styles.count}>Count</Text>
                <Text style={styles.time}>Time</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.symbol}>{stock[0].symbol}</Text>
                <Text style={styles.lastPrice}>{stock[0].lastPrice}</Text>
                {stock[0].priceChangePercent>0 && <Text style={{color: "green", fontSize: 16}}>{stock[0].priceChangePercent}%</Text>}
                {stock[0].priceChangePercent<0 && <Text style={{color: "red", fontSize: 16}}>{stock[0].priceChangePercent}%</Text>}
                {/* {stock[0].priceChangePercent>=0 && <Text style={{color: "black"}}>{stock[0].priceChangePercent}%</Text>} */}
                <Text style={styles.lastQty}>{stock[0].lastQty}</Text>
                <Text style={styles.bidPrice}>{stock[0].bidPrice}</Text>
                <Text style={styles.bidQty}>{stock[0].bidQty}</Text>
                <Text style={styles.askPrice}>{stock[0].askPrice}</Text>
                <Text style={styles.askQty}>{stock[0].askQty}</Text>
                <Text style={styles.highPrice}>{stock[0].highPrice}</Text>
                <Text style={styles.lowPrice}>{stock[0].lowPrice}</Text>
                <Text style={styles.volume}>{stock[0].volume}</Text>
                <Text style={styles.count}>{stock[0].count}</Text>
                <Text style={styles.time}>{timeStampToDate(stock[0].closeTime)}</Text>
            </View>
        </View>
    );
};

export default PriceCard;