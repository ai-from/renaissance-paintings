import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paintings: [
      {
        title: 'Рождение Венеры',
        data: 'Сандро Боттичелли, 1501 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: true,
        inBasket: false,
        src: 'img_1.png'
      },
      {
        title: 'Рождение Венеры 2',
        data: 'Сандро Боттичелли, 1502 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: true,
        src: 'img_2.png'
      },
      {
        title: 'Рождение Венеры 3',
        data: 'Сандро Боттичелли, 1503 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_3.png'
      },
      {
        title: 'Рождение Венеры 4',
        data: 'Сандро Боттичелли, 1504 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_4.png'
      },
      {
        title: 'Рождение Венеры 5',
        data: 'Сандро Боттичелли, 1505 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_5.png'
      },
      {
        title: 'Рождение Венеры 6',
        data: 'Сандро Боттичелли, 1506 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_6.png'
      },
      {
        title: 'Рождение Венеры 7',
        data: 'Сандро Боттичелли, 1507 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_7.png'
      },
      {
        title: 'Рождение Венеры 8',
        data: 'Сандро Боттичелли, 1508 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_8.png'
      },
      {
        title: 'Рождение Венеры 9',
        data: 'Сандро Боттичелли, 1509 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_9.png'
      },
      {
        title: 'Рождение Венеры 10',
        data: 'Сандро Боттичелли, 1510 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_10.png'
      },
      {
        title: 'Рождение Венеры 11',
        data: 'Сандро Боттичелли, 1511 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_11.png'
      },
      {
        title: 'Рождение Венеры 12',
        data: 'Сандро Боттичелли, 1512 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_12.png'
      },
      {
        title: 'Рождение Венеры 13',
        data: 'Сандро Боттичелли, 1513 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_13.png'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
