<template>
    <v-container>
      <h1> A MAIS GOSTOSA DO MUNDO!!! </h1>
    </v-container>
  </template>
  
  <script>
    import produtoService from '@/services/produtoService'
    export default {
      name: 'HelloWorld',
  
      data: () => ({
        data: {
                nome: 'aaa',
                preco: 12
            }
      }),
      mounted () {
        this.teste()
      },
      methods: {
        teste () {
            
            produtoService.cadastrarProduto(this.data).then(r => {
                if(r.status == 201) {
                    console.log('RETORNO: ', r.data )
                }
            })
        }
      }
    }
  </script>
  