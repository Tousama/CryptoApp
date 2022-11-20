import { Text, View } from 'react-native';
import { useSelector } from "react-redux";
import PriceCard from "../../../components/cards/PriceCard";
import styles from "./Price.style";

// Price page
const Price = ({ route }) => {
    // Selected symbol parameter from Detail page
    const symbol = route.params.symbol;
    // Obtain Price data with redux-toolkit thunk
    const responseData = useSelector(state => state.stocks24hUrl).data;
    // Filter Price data for selected symbol
    const data = responseData.filter((obj) => obj.symbol == symbol);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{symbol} PRICE</Text>
            <PriceCard stock={data} />
        </View>
    );
};

export default Price;