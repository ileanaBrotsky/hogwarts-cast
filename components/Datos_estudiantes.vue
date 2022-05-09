<template>
    <v-flex class="text-center ">
        <v-btn elevation="6"  class="boton_magico rounded-lg pa-3" @click="escribirTextoApi()">
            <v-icon dark> mdi-auto-fix </v-icon>
            ACCIO
        </v-btn>
    <v-container>
    <v-flex class="text-center" xs12>
        <p class="white--text text--darken-2" v-if="estudiantesDosGrupos.length !=0"> La cantidad de estudiantes que pertenecen a ambos grupos es: {{ cantidadEstudiantes }}</p>
   </v-flex>
    <v-row>
      <v-col  v-for= "(Personaje, index) in estudiantesDosGrupos" :key="index">
          <v-sheet class="pa-3 text-center" color="white" elevation="18" height="90" outlined rounded shaped width="120" >
              {{Personaje.name}}
          </v-sheet>
      </v-col>
    </v-row>
   </v-container> 
   </v-flex>
</template>

<script>
export default {
  data: () => ({
    estudiantesDosGrupos:[],
    cantidadEstudiantes:0,
    page:1,
    pages:1,
  }),
  methods: {
    escribirTextoApi: function(){
      this.$axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(response=>{
        console.log(response.data)
          let i=0;
          let estudiantes=[];
          for (i=0; i<response.data.length; i++){
           if(response.data[i].hogwartsStudent===true){
              estudiantes.push(response.data[i]) 
            }
          }
       this.$axios.get('http://hp-api.herokuapp.com/api/characters/students')
        .then(response=>{
          let i=0;
          for (i=0; i<response.data.length; i++){
            estudiantes.forEach((estudiante)=>{
              if(response.data[i].name===estudiante.name){
              this.estudiantesDosGrupos.push(response.data[i]);
              }
            });
          }
           
           this.cantidadEstudiantes= estudiantesDosGrupos.length;
      }).catch(err=>console.log(err));
      }).catch(err=>console.log(err));
   }
  }
}
</script>
<style scoped>
.boton_magico{
 background: linear-gradient(to right, #0ea1e6,#171d25);
 color:white;
}
.boton_magico:hover{
 background: linear-gradient(to right, #5b0562,#171d25);
 width: 150px;
 height: 50px; 
 font-size: 23px;
 animation: magia 3s ease infinite;
}
@keyframes magia{
    0%{
        transform: rotate(45deg) ;
    }
    50%{
        transform: rotate(0deg) ;
    }
    100%{
        transform: rotate(45deg);
    }
}
</style>