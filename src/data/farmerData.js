const farmerData = {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Vill. Bhainsa, Dist. Meerut, Uttar Pradesh, India',
    bio: 'I have been farming for 15 years and specialize in growing organic crops. My farm uses sustainable practices to ensure that our produce is healthy and nutritious.',
    crops: [
        {
            id: 1,
            name: 'Wheat',
            quantity: 1000,
            price: 20.00,  // price in INR per kg
            image: 'https://example.com/wheat.jpg'
        },
        {
            id: 2,
            name: 'Rice',
            quantity: 800,
            price: 30.00,  // price in INR per kg
            image: 'https://example.com/rice.jpg'
        },
        {
            id: 3,
            name: 'Mangoes',
            quantity: 500,
            price: 50.00,  // price in INR per kg
            image: 'https://example.com/mangoes.jpg'
        }
    ],
    reviews: [
        {
            id: 1,
            reviewerName: 'Anita Verma',
            rating: 5,
            comment: "Rajesh's produce is always fresh and of great quality. I highly recommend his farm!"
        },
        {
            id: 2,
            reviewerName: 'Manoj Singh',
            rating: 4,
            comment: 'The organic practices of Rajesh Kumar make his produce trustworthy and healthy. Great quality!'
        }
    ]
}
