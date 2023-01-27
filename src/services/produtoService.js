import request from './request'

export default {
    // cadastrar produto
    cadastrarProduto: (data) => {
      console.log(data)
      return request({
        url: '/',
        method: 'post',
        data
      })
    },
}