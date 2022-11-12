import { STOCKS_24H_URL } from "@env";
import React from 'react';
import { Text, View } from 'react-native';
import PriceCard from "../../../components/cards/PriceCard";
import useFetch from '../../../hooks/useFetch';
import styles from "./Price.style";

const Price = ({route}) => {
    const symbol = route.params.symbol;
    const oldData = route.params.data[0];
    const {data, loading} = useFetch(STOCKS_24H_URL+`?symbol=${symbol}`);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} PRICE</Text>
            {data.length == 0 && <PriceCard stock={[oldData]}/>}
            {data.length != 0 && <PriceCard stock={[data]}/>}
        </View>
    );
};

export default Price;