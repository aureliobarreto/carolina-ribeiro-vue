<template>
    <v-app>
        <AppToolbar/> 
        <div class="mt-15">
          aaaaaaaaa
          <v-img src="../assets/logo07.png"></v-img>
        </div>
    </v-app>
  </template>
  
  <script>
    import AppToolbar from '../views/AppToolbar'
    import produtoService from '@/services/produtoService'
    export default {
      name: 'HelloWorld',
      components: {
         AppToolbar
      },
  
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
 
  