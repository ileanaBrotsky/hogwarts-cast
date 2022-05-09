<template>
    <v-flex>
        <v-btn elevation="6"  class="primary rounded-lg pa-3" @click="escribirTextoApi()">
            <v-icon dark> mdi-auto-fix </v-icon>
            ACCIO
        </v-btn>
    
    <v-flex class="text-center" xs12>
        <p class="white--text text--darken-2" v-if="todosLosPersonajes.length !=0"> La cantidad de estudiantes que pertenecen a ambos grupos es: {{ cantidadEstudiantes }}</p>
   </v-flex>
   <v-row>
   <v-col  v-for= "(Personaje, index) in todosLosPersonajes" :key="index">
        <v-sheet class="pa-3 text-center" color="white" elevation="18" height="90" outlined rounded shaped width="120" >
            {{Personaje.name}}
        </v-sheet>
   </v-col>
   </v-row>
   </v-flex>
</template>

<script>
export default {
  data: () => ({
   todosLosPersonajes:[],
   cantidadEstudiantes:0,
  
  }),
  methods: {
    escribirTextoApi: function(){
      this.$axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(response=>{
          let largo= response.data.length;
          let i=0;
          let estudiantes=[];
          for (i=0; i<largo; i++){
           if(response.data[i].hogwartsStudent===true){
              estudiantes.push(response.data[i]) 
            }
          }
       this.$axios.get('http://hp-api.herokuapp.com/api/characters/students')
        .then(response=>{
          let largo= response.data.length;
          let i=0;
          let estudiantesDosGrupos=[];
          for (i=0; i<largo; i++){
            estudiantes.forEach((estudiante)=>{
              if(response.data[i].name===estudiante.name){
              estudiantesDosGrupos.push(response.data[i]);
        }
            });
          }
           this.todosLosPersonajes= estudiantesDosGrupos;
           this.cantidadEstudiantes= estudiantesDosGrupos.length;
      }).catch(err=>console.log(err));
      }).catch(err=>console.log(err));
   }
  }
}
</script>