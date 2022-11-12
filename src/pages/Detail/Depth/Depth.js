import { STOCKS_DEPTH } from "@env";
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import DepthCard from "../../../components/cards/DepthCard";
import Loading from '../../../components/Loading';
import useFetch from '../../../hooks/useFetch';
import styles from "./Depth.style";

const Depth = ({route}) => {
    const symbol = route.params.symbol;
    const {data, loading} = useFetch(STOCKS_DEPTH+`?symbol=${symbol}`);

    const renderStock = ({item}) => <DepthCard stock={item}/>

    if (data.length == 0){
        return <Loading/>
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} DEPTH</Text>
            <View style={styles.info}>
            <Text style={styles.asks}>ASKS</Text>
            <Text style={styles.bids}>BIDS</Text>
            </View>
            <View style={styles.innerContainer}>
                    <FlatList
                        data={data.asks}
                        renderItem={renderStock}
                        />
                    <FlatList
                        data={data.bids}
                        renderItem={renderStock}
                        />
            </View>
        </View>
    );
};

export default Depth;