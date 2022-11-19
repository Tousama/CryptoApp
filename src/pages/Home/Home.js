import { STOCKS_24H_URL } from "@env";
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import HomeCard from '../../components/cards/HomeCard';
import Loading from '../../components/Loading';
import { getStocks24hUrl } from '../../components/redux/features/stocks24hUrlSlice';
import styles from "./Home.style";

const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.stocks24hUrl).data;

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getStocks24hUrl(STOCKS_24H_URL));
        }, 10000);
        return () => clearInterval(interval)
    }, []);

    if (data.length == 0) {
        return <Loading />;
    }

    const renderStock = ({ item }) => <HomeCard stock={item} />

    const onPressSignIn = () => {
        navigation.navigate("SignIn", { data })
    }
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
                /* refreshing={loading} */
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