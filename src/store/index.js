import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paintings: [
      {
        id: 1,
        title: 'Рождение Венеры',
        data: 'Сандро Боттичелли, 1501 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: true,
        inBasket: false,
        src: 'img_1.png'
      },
      {
        id: 2,
        title: 'Рождение Венеры 2',
        data: 'Сандро Боттичелли, 1502 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_2.png'
      },
      {
        id: 3,
        title: 'Рождение Венеры 3',
        data: 'Сандро Боттичелли, 1503 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_3.png'
      },
      {
        id: 4,
        title: 'Рождение Венеры 4',
        data: 'Сандро Боттичелли, 1504 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_4.png'
      },
      {
        id: 5,
        title: 'Рождение Венеры 5',
        data: 'Сандро Боттичелли, 1505 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: true,
        inBasket: false,
        src: 'img_5.png'
      },
      {
        id: 6,
        title: 'Рождение Венеры 6',
        data: 'Сандро Боттичелли, 1506 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_6.png'
      },
      {
        id: 7,
        title: 'Рождение Венеры 7',
        data: 'Сандро Боттичелли, 1507 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_7.png'
      },
      {
        id: 8,
        title: 'Рождение Венеры 8',
        data: 'Сандро Боттичелли, 1508 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: true,
        inBasket: false,
        src: 'img_8.png'
      },
      {
        id: 9,
        title: 'Рождение Венеры 9',
        data: 'Сандро Боттичелли, 1509 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_9.png'
      },
      {
        id: 10,
        title: 'Рождение Венеры 10',
        data: 'Сандро Боттичелли, 1510 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_10.png'
      },
      {
        id: 11,
        title: 'Рождение Венеры 11',
        data: 'Сандро Боттичелли, 1511 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_11.png'
      },
      {
        id: 12,
        title: 'Рождение Венеры 12',
        data: 'Сандро Боттичелли, 1512 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: false,
        inBasket: false,
        src: 'img_12.png'
      },
      {
        id: 13,
        title: 'Рождение Венеры 13',
        data: 'Сандро Боттичелли, 1513 г.',
        oldPrice: '2 000 000',
        newPrice: '1 000 000',
        isSold: true,
        inBasket: false,
        src: 'img_13.png'
      }
    ]
  },
  mutations: {
    toBasket(state, id) {
      const curr = state.paintings.filter(item => item.id === id)
      curr[0].inBasket = true
    }
  },
  actions: {
  },
  getters: {
    getInBasket(state) {
      return state.paintings.filter(item => item.inBasket).length
    }
  },
  modules: {
  }
})
