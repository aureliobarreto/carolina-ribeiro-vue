<template>
    <div id="inspire" class="global">

        <v-navigation-drawer v-if="drawer" fixed app v-model="drawer" width="260">
            <v-img max-width="250" src="../assets/logo03.svg"></v-img>
        </v-navigation-drawer>
       

       <v-app-bar color="#2D3343" dark fixed app>
                
                
                <v-spacer/>         
                <v-img class="hidden-sm-and-down" max-width="450" src="../assets/logo02.svg"></v-img>
                <v-spacer></v-spacer>
                <div class="mr-4">seja um franqueado</div>
                <div><Login/></div>
                <v-btn icon >
                    <v-icon>shopping_bag</v-icon>
                </v-btn>
                <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
        </v-app-bar>
   
    </div>
</template>
<script>
import Login from '../components/LoginLayout'
    export default {
        components: {
            Login
        },
        data () {
            return {
                mini: false,
                drawer: false
            }
        }
    }
</script>
<style>
 .global{
  font-family: Rajdhani;
 }
 </style>