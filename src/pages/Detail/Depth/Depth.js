import { FlatList, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import DepthCard from "../../../components/cards/DepthCard";
import Loading from '../../../components/Loading';
import styles from "./Depth.style";
useSelector;

//Depth page
const Depth = ({ route }) => {
    //Selected symbol parameter from Detail page
    const symbol = route.params.symbol;
    // Obtain Depth data with redux-toolkit thunk
    const depth = useSelector(state => state.stocksDepth).data;
    // Render DepthCard in Flatlist
    const renderStock = ({ item }) => <DepthCard stock={item} />
    //Depth loading screen
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