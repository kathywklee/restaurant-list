export const restaurantList = {
  meta: {
    currency: {
      type: 'euro',
      denominator: 100,
    },
    time: {
      type: 'minutes',
      denominator: 1,
    },
  },
  aggregates: {
    cuisines: {
      sushi: 'sushi',
      burger: 'burger',
      french: 'french',
    },
    total: {
      restaurants: 5,
    },
    shipping: {
      pickup: 'pickup',
      delivery: 'delivery',
    },
  },
  data: [
    {
      id: '123',
      slug: 'pizza-max',
      restaurantLogo: '',
      name: 'Pizza Max',
      cuisines: ['sushi'],
      shipping: {
        type: ['delivery', 'pickup'],
        estimatedTime: 30,
      },
      info: {
        open: true,
        minimumOrderValue: 15,
        ratings: {
          total: 3000,
          score: {
            median: 4.3,
            average: 3.2,
          },
        },
      },
    },

    {
      id: '124',
      slug: 'mc-donalds',
      restaurantLogo: '',
      name: 'Mc. Donalds',
      cuisines: ['burger'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 30,
      },
      info: {
        open: true,
        minimumOrderValue: 10,
        ratings: {
          total: 3000,
          score: {
            median: 4.3,
            average: 3.2,
          },
        },
      },
    },
  ],
};
