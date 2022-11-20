import { configureStore } from "@reduxjs/toolkit";
import stocks24hUrl from "./features/stocks24hUrlSlice";
import stocksDepth from "./features/stocksDepthSlice";
import stocksHistoricalData from "./features/stocksHistoricalDataSlice";

const store = configureStore({
    reducer: {
        stocks24hUrl: stocks24hUrl.reducer,
        stocksDepth: stocksDepth.reducer,
        stocksHistoricalData: stocksHistoricalData.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: false,
    })
});

export default store;