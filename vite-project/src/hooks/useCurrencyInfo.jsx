import React, { useEffect, useState } from "react";
import axios from 'axios';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(function (response) {
                setData(response.data[currency]);
            })
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
