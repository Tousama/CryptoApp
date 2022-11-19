import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import ListCard from '../../components/cards/ListCard/ListCard';
import SearchBar from '../../components/SearchBar';
import styles from "./List.style";

const List = ({ navigation, route }) => {
    /* const { data, loading } = useFetch(STOCKS_24H_URL);

    let oldData = route.params.data;
    if (data.length != 0) {
        oldData = data;
    }
 */
    const data = useSelector(state => state.stocks24hUrl).data;
    const [list, setList] = useState(data);

    const renderStock = ({ item }) => <ListCard stock={item} onSelect={() => handleOnPress(item.symbol)} />
    const handleOnPress = (symbol) => {
        const newData = data.filter((obj) => obj.symbol == symbol);
        navigation.navigate("Detail", { symbol, newData });
    }

    const handleSelect = text => {
        const filteredStock = data.filter(stock => {
            const searchedText = text.toLowerCase();
            const currentStockName = stock.symbol.toLowerCase();
            return currentStockName.indexOf(searchedText) > -1;
        });
        setList(filteredStock);
    };

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSelect} />
            <View style={styles.text}>
                <Text style={styles.filterText}>Number of Listed Coins:</Text>
                <Text style={styles.filterLength}>{list.length}</Text>
            </View>
            <FlatList
                data={list}
                renderItem={renderStock}
                initialNumToRender={7}
            /* refreshing={loading} */
            />
        </View>
    );
};

export default List;