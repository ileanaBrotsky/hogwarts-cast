<template>
    <v-flex class="text-center ">
    
    <v-container>
    <v-flex class="text-center" xs12>
        <p class="white--text text--darken-2"> La cantidad de estudiantes que pertenecen a ambos grupos es: {{estudiantes.length }}</p>
   </v-flex> 
    <v-row>
      <v-col  v-for= "(estudiante, index) in estudiantes" :key="index">
          <v-sheet class="pa-3 text-center" color="white" elevation="18" height="90" outlined rounded shaped width="120" >
              {{estudiante.name}}
          </v-sheet>
      </v-col>
    </v-row>

   </v-container> 
   </v-flex>
</template>

<script>
export default {
  computed:{
    estudiantes(){
      return this.$store.getters['getEstudiantes']
    },
    
   
  },
  data: () => ({
//  estudiantes_ordenados:this.estudiantes.sort()

  }),
  created(){
    this.$store.dispatch("recibirEstudiantes")
 
  },
  mounted(){
    // console.log(this.estudiantes_ordenados)
  }

}
</script>

<style >

</style>