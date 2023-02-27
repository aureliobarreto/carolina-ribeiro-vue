<template>
        <v-layout align-end>
        <v-dialog max-width="500px" v-model="dialog" class="overflow-hidden">
            <template v-slot:activator="{ on, attrs }">
                
                <div v-bind="attrs" v-on="on" style="font-family:'Rajdhani';"> login</div>
            
            </template>
           
            
            <v-card flat class="overflow-hidden" align="center">
                <v-card-title>Bem-vindo(a) a Carolina Ribeiro</v-card-title>
                <v-form>
                        <v-card flat class="ma-5 mb-0">
                            <v-text-field outlined class="mt-6"  label="usuário"></v-text-field>
                            <v-text-field outlined class="mb-0"  type="password" label="senha"></v-text-field>
                            <v-checkbox class="mt-0 mb-0" label="Manter conectado" ></v-checkbox>
                        </v-card>
                        <v-card-actions class="ma-5 mt-0">                           
                            <v-spacer/>
                            <v-row >
                                <v-col sm="12" >
                                <v-btn color="primary" width="450">Login</v-btn>
                                </v-col>
                                <v-divider/>
                                <v-layout justify-center> -------- ou --------</v-layout>
                                
                                <v-col sm="12">

                                <v-btn  color="#FF4B26" width="450" class="lighten-5 white--text" @click="dialog = false">
                                    <v-img max-width="23" class="mr-1" src="../assets/google.png"></v-img>
                                    Continuar com o Google </v-btn>
                                </v-col>
                                <v-col sm="12">
                                <v-btn color="#3A589B" class="white--text" width="450" @click="dialog = false">
                                    <v-img max-width="30" class="mr-1" src="../assets/facebook.png"></v-img>
                                    Continuar com o Facebook</v-btn>
                                </v-col>
                                <v-col sm="12">
                                <span> Não tem uma conta? <b @click="dialog = false">Cadastre-se</b></span> 
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    
                </v-form>
            </v-card>
            <v-card color="grey" align="center" class="lighten-1">
                Esqueci minha senha <b>recuperar senha</b>
            </v-card>
        
    </v-dialog>
</v-layout>
    
</template>

<script>


export default {
    components: {
      
    },
    data () {
        return {
            dialog: false
        }
    }
}
</script>
<style>

</style>