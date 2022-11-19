import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from "react-redux";
import PriceCard from "../../../components/cards/PriceCard";
import styles from "./Price.style";

const Price = ({ route }) => {
    const symbol = route.params.symbol;
    const responseData = useSelector(state => state.stocks24hUrl).data;
    const data = responseData.filter((obj) => obj.symbol == symbol);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} PRICE</Text>
            <PriceCard stock={data} />
        </View>
    );
};

export default Price;