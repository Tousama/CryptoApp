import { STOCKS_DEPTH } from "@env";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from 'react';
import { Dimensions, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getStocksDepth } from "../../components/redux/features/stocksDepthSlice";
import Depth from "./Depth";
import HistoricalData from "./HistoricalData";
import Price from "./Price";

// created BottomTabNavigator
const Tab = createBottomTabNavigator();
// height variable for BottomTab height
const height = Dimensions.get("window").height;

// Detail page
const Detail = ({ route }) => {
    // Selected symbol parameter from List page
    const symbol = route.params.symbol;
    const dispatch = useDispatch();
    // Obtain Depth data with redux-toolkit thunk 
    const depth = useSelector(state => state.stocksDepth).data;
    // Data updated every 10 seconds.
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getStocksDepth(STOCKS_DEPTH + "?symbol=" + symbol));
        }, 10000);
        return () => clearInterval(interval)
    }, []);

    return (
        // Tab Navigator has 3 pages. Price-HistoricalData-Depth
        <Tab.Navigator initialRouteName="Price" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Price" component={Price} initialParams={{ symbol: symbol }} options={{
                //Tab screen options
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
                // Tab screen options
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
                // Tab screen options
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