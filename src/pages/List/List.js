import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import ListCard from '../../components/cards/ListCard/ListCard';
import SearchBar from '../../components/SearchBar';
import styles from "./List.style";

// List page
const List = ({ navigation, route }) => {
    // Obtain data
    const data = useSelector(state => state.stocks24hUrl).data;
    const dispatch = useDispatch();
    // Obtain HistoricalData
    const historicalData = useSelector(state => state.stocksHistoricalData).data;

    const [list, setList] = useState(data);
    // Render ListCard in Flatlist have handleOnPress prop that is going to Detail page
    const renderStock = ({ item }) => <ListCard stock={item} onSelect={() => handleOnPress(item.symbol)} />
    // HandleOnPress func that is filtering and carries symbol parameter to Detail page 
    const handleOnPress = (symbol) => {
        const newData = data.filter((obj) => obj.symbol == symbol);
        navigation.navigate("Detail", { symbol, newData });
    }
    // When you search coin in search bar handleSelect filtering data and show the coin you are looking 
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
            />
        </View>
    );
};

export default List;