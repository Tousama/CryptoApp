import { STOCKS_HISTORICAL_DATA } from "@env";
import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import HistoricalDataCard from '../../../components/cards/HistoricalDataCard';
import Loading from '../../../components/Loading';
import { getStocksHistoricalData } from "../../../components/redux/features/stocksHistoricalDataSlice";
import styles from "./HistoricalData.style";

// HistoricalData page
const HistoricalData = ({ route }) => {
    // Selected symbol parameter from Detail page.
    const symbol = route.params.symbol;
    const dispatch = useDispatch();
    // Data updated every 10 seconds.
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getStocksHistoricalData(STOCKS_HISTORICAL_DATA + "?symbol=" + symbol + "&interval=1m"));
        }, 10000);
        return () => clearInterval(interval)
    }, []);
    // Obtain HistoricalPrice data with redux-toolkit thunk 
    const data = useSelector(state => state.stocksHistoricalData).data;
    // Render HistoricalDataCard in Flatlist
    const renderStock = ({ item }) => <HistoricalDataCard stock={item} />;
    //HistoricalData loading screen
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