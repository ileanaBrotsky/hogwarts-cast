<template>
  
      <v-container class="text-center pa-3 menu">
      
       <v-flex class= "barra_menu">
         <v-btn color="transparent" class="btn-menu" ><NuxtLink to="/"><v-icon >mdi-home-variant </v-icon>Home page</NuxtLink> </v-btn>
        <v-btn color="transparent" class="btn-menu"><NuxtLink to="/casasHogwarts"><v-icon color="primary">mdi-flag-variant </v-icon> ver por casas</NuxtLink> </v-btn>
          <v-btn color="transparent" class="btn-menu"><NuxtLink to="/ConFoto"><v-icon > mdi-account-box </v-icon>estudiantes con foto</NuxtLink> </v-btn>
          <v-btn color="transparent" class="btn-menu"><NuxtLink to="/Estudiantes">  <v-icon > mdi-auto-fix </v-icon>todos los estudiantes</NuxtLink>  </v-btn> 
          <MusicaHarry/> 
       </v-flex>
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

@media screen and (max-width: 390px){
.btn-menu {
  font-size: 10px;
}
}

</style>