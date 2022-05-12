<template>
  
      <v-container class="text-center pa-3 menu">
        <!-- @click="separarPorcasas()"
        @click="estudiantesConFoto()"
           -->
       <v-row>
         <v-col> <v-btn ><v-icon color="primary">mdi-home-variant </v-icon><NuxtLink to="/">Home page</NuxtLink> </v-btn></v-col>
         <v-col> <v-btn ><v-icon color="primary">mdi-flag-variant </v-icon> <NuxtLink to="/CasasHogwarts">ver por casas</NuxtLink> </v-btn></v-col>
         <v-col> <v-btn ><v-icon color="primary"> mdi-account-box </v-icon><NuxtLink to="/ConFoto">estudiantes con foto</NuxtLink> </v-btn></v-col>
         <v-col> <v-btn @click="escribirTextoApi()"> <v-icon color="primary"> mdi-auto-fix </v-icon> todos los estudiantes </v-btn> </v-col>
         <v-col> <MusicaHarry/> </v-col>   
       </v-row>
      </v-container>
  
</template>

<script>
import MusicaHarry from './MusicaHarry'
export default {
  data: () => ({
  
  }),
  components: {
   MusicaHarry,
  },

}
</script>

<style>

</style>