<template>
        
        <v-dialog max-width="500px" v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>person</v-icon>
                </v-btn>
                
            </template>
            <v-card>
                <v-card-title>Bem-vindo(a) à Carolina Ribeiro</v-card-title>
                <v-form>
                    
                        <v-text-field outlined class="ma-3 mt-5"  label="usuário"></v-text-field>
                        <v-text-field outlined class="ma-3" type="password" label="senha"></v-text-field>
                        <v-checkbox label="Manter conectado" class="ml-2"></v-checkbox>
                        <v-card-actions>
                           
                            <v-spacer/>
                            <v-row justify-content-center>
                                <v-col sm="12">
                                <v-btn color="primary" width="420">Login</v-btn>
                                </v-col>
                                <v-divider/>
                                <v-layout justify-center> -------- ou --------</v-layout>
                                
                                <v-col sm="12">
                                <v-btn class="ml-2" width="420" @click="dialog = false">Continuar com o Google</v-btn>
                                </v-col>
                                <v-col sm="12">
                                <v-btn class="ml-2" width="420" @click="dialog = false">Continuar com o Facebook</v-btn>
                                </v-col>
                                <span> Esqueci minha senha</span>
                            </v-row>
                        </v-card-actions>
                    
                </v-form>
            </v-card>
        
    </v-dialog>

    
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