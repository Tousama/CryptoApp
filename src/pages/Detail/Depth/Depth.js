import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import DepthCard from "../../../components/cards/DepthCard";
import Loading from '../../../components/Loading';
import styles from "./Depth.style";
useSelector;

const Depth = ({ route }) => {
    const symbol = route.params.symbol;
    const depth = useSelector(state => state.stocksDepth).data;
    const renderStock = ({ item }) => <DepthCard stock={item} />

    if (depth.length == 0) {
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} DEPTH</Text>
            <View style={styles.info}>
                <Text style={styles.asks}>ASKS</Text>
                <Text style={styles.bids}>BIDS</Text>
            </View>
            <View style={styles.innerContainer}>
                <FlatList
                    data={depth.asks}
                    renderItem={renderStock}
                />
                <FlatList
                    data={depth.bids}
                    renderItem={renderStock}
                />
            </View>
        </View>
    );
};

export default Depth;