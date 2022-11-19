import { STOCKS_DEPTH, STOCKS_HISTORICAL_DATA } from "@env";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from 'react';
import { Dimensions, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getStocksDepth } from "../../components/redux/features/stocksDepthSlice";
import { getStocksHistoricalData } from "../../components/redux/features/stocksHistoricalDataSlice";
import Depth from "./Depth";
import HistoricalData from "./HistoricalData";
import Price from "./Price";
/*
    2- Last trades kısmı api'dan çekilecek
    3- Uzun listelerde bir şekilde kaçıncı array'de olduğumuzu gösteren bir gösterge olabilir??(Zor olduğunun farkındayım)
    4- Uzun listelerde bir button eklenerek daha hızlı aşağıya inilmesi sağlanabilir.
    5- Navigation'ların header kısmı düzenlenebilir.
    6- Değerler yenilendiği zaman yükselme olursa yeşil yanıp söner, düşme olursa kırmızı yanıp söner.
    7- Flatlist dinamik bir şekilde liste elemanlarının yeri değişebilir mi??(Belki çözümü vardır.)
    8- 1 saat, 8 saat, 1 gün, 1 hafta, 1 ay, 1 yıllık değişimlerinin gösterilmesi..
*/

const Tab = createBottomTabNavigator();

const height = Dimensions.get("window").height;

const Detail = ({ route }) => {
    const symbol = route.params.symbol;

    const dispatch = useDispatch();

    const depth = useSelector(state => state.stocksDepth).data;

    const historicalData = useSelector(state => state.stocksHistoricalData).data;

    /* console.log(historicalData); */
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getStocksDepth(STOCKS_DEPTH + "?symbol=" + symbol));
        }, 10000);
        const interval2 = setInterval(() => {
            dispatch(getStocksHistoricalData(STOCKS_HISTORICAL_DATA + "?symbol=" + symbol + "&interval=1m"));
        }, 10000);
        return () => clearInterval(interval, interval2)
    }, []);

    return (
        <Tab.Navigator initialRouteName="Price"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Price" component={Price} initialParams={{ symbol: symbol }} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("../../assets/dollar.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                },
                tabBarStyle: { alignItems: "center", justifyContent: "center", height: height * 0.08, backgroundColor: "#e1e1e1" },
                tabBarLabelStyle: { marginBottom: 5, fontSize: 14, },
                tabBarIconStyle: { marginTop: 5 },
                tabBarActiveBackgroundColor: "#BBBBBB",
                tabBarActiveTintColor: "#000000",
            }} />
            <Tab.Screen name="HistoricalData" component={HistoricalData} initialParams={{ symbol: symbol }} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("../../assets/historical.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                },
                tabBarStyle: { alignItems: "center", justifyContent: "center", height: height * 0.08, backgroundColor: "#e1e1e1" },
                tabBarLabelStyle: { marginBottom: 5, fontSize: 14, },
                tabBarIconStyle: { marginTop: 5 },
                tabBarActiveBackgroundColor: "#BBBBBB",
                tabBarActiveTintColor: "#000000",
            }} />
            <Tab.Screen name="Depth" component={Depth} initialParams={{ symbol: symbol }} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Image
                                source={require("../../assets/depth-perception.png")}
                                resizeMode="contain"
                                style={{ width: 25 }}
                            />
                        </View>
                    );
                },
                tabBarStyle: { alignItems: "center", justifyContent: "center", height: height * 0.08, backgroundColor: "#e1e1e1" },
                tabBarLabelStyle: { marginBottom: 5, fontSize: 14, },
                tabBarIconStyle: { marginTop: 5 },
                tabBarActiveBackgroundColor: "#BBBBBB",
                tabBarActiveTintColor: "#000000",
            }} />
        </Tab.Navigator>
    );
};

export default Detail;