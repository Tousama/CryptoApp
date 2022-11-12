import { STOCKS_HISTORICAL_DATA } from "@env";
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import HistoricalDataCard from '../../../components/cards/HistoricalDataCard';
import Loading from '../../../components/Loading';
import useFetch from '../../../hooks/useFetch';
import styles from "./HistoricalData.style";

const HistoricalData = ({route}) => {
    const symbol = route.params.symbol;
    const {data, loading} = useFetch(STOCKS_HISTORICAL_DATA+`?symbol=${symbol}&interval=1m`);

    const renderStock = ({item}) => <HistoricalDataCard stock={item}/>;

    if (data.length==0){
        return <Loading/>
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} HISTORICAL DATA</Text>
            <FlatList
                data={[...data].reverse()}
                renderItem={renderStock}
            />
        </View>
    );
};

export default HistoricalData;