<template>
  <v-app >
    <v-main>
      <v-container fluid>
         <MenuNavegacion />
        <Nuxt />
      </v-container>
    </v-main>
   
    <v-footer
      
    >
    <v-row class="justify-space-between pt-3 px-2">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <p>Hecho con entusiasmo por ileana, para Norberto <span> <v-icon>mdi-emoticon-happy</v-icon></span></p>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
   
    }
  }
}
</script>
<style>
*{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

main{
  background-image: url("../assets/img_fondoHP.jpeg");
  background-size:cover;
  background-position: 0 center;
  
}
</style>