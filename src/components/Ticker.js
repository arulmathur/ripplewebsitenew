import React, { useState, useEffect } from 'react';

function Ticker() {
    const [quantity, setQuantity] = useState(null);

    useEffect(() => {
        const fetchQuantity = async () => {
            try {
                const response = await fetch('https://api.squarespace.com/1.0/commerce/products/SQ8748464', {
                    headers: {
                        'Authorization': 'Bearer e5237bb7-7b7d-4c41-9437-d5af56a3cb08',
                        'User-Agent': 'YOUR_CUSTOM_APP_DESCRIPTION',
                    },
                });
                const data = await response.json();
                setQuantity(data.quantity);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuantity();
    }, []);

    return (
        <div>
            <p>{quantity} items in stock</p>
        </div>
    );
}

export default Ticker;