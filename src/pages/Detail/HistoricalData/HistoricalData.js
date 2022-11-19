import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import HistoricalDataCard from '../../../components/cards/HistoricalDataCard';
import Loading from '../../../components/Loading';
import styles from "./HistoricalData.style";
useSelector;

const HistoricalData = ({ route }) => {
    const symbol = route.params.symbol;

    const data = useSelector(state => state.stocksHistoricalData).data;

    console.log(data.length);

    const renderStock = ({ item }) => <HistoricalDataCard stock={item} />;

    if (data.length == 0) {
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} HISTORICAL DATA</Text>
            <FlatList
                data={[...data].reverse()}
                renderItem={renderStock}
                initialNumToRender={7}
            />
        </View>
    );
};

export default HistoricalData;