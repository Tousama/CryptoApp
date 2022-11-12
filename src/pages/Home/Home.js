import { STOCKS_24H_URL } from "@env";
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import HomeCard from '../../components/cards/HomeCard';
import Loading from "../../components/Loading";
import useFetch from '../../hooks/useFetch/useFetch';
import styles from "./Home.style";

const Home = ({navigation}) => {
    const {data, loading} = useFetch(STOCKS_24H_URL);
    const renderStock = ({item}) => <HomeCard stock={item}/>

    const onPress = () => {
        navigation.navigate("List", {data})
    }

    if (loading) {
        return <Loading/>
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>WELCOME TO CRYPTOAPP</Text>
            <FlatList
                data={data.slice(0,10)}
                renderItem={renderStock}
                initialNumToRender={10}
                refreshing={loading}
                numColumns={2}
            />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>View More...</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;