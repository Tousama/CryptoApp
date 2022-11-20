import { STOCKS_24H_URL } from "@env";
import { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import HomeCard from '../../components/cards/HomeCard';
import Loading from '../../components/Loading';
import { getStocks24hUrl } from '../../components/redux/features/stocks24hUrlSlice';
import styles from "./Home.style";

// Home page
const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    // Obtain data
    const data = useSelector(state => state.stocks24hUrl).data;
    // Data updated every 10 seconds.
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getStocks24hUrl(STOCKS_24H_URL));
        }, 10000);
        return () => clearInterval(interval)
    }, []);
    //Home loading screen 
    if (data.length == 0) {
        return <Loading />;
    }
    // Render HomceCard in Flatlist
    const renderStock = ({ item }) => <HomeCard stock={item} />
    // Going SignIn page
    const onPressSignIn = () => {
        navigation.navigate("SignIn", { data })
    }
    // Going SignUp page
    const onPressSignUp = () => {
        navigation.navigate("SignUp", { data })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>WELCOME TO CRYPTOAPP</Text>
            <FlatList
                data={data.slice(0, 8)}
                renderItem={renderStock}
                initialNumToRender={8}
                numColumns={2}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;