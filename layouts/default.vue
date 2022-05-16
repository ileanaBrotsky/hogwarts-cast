<template>
  <v-app >
    <v-main>
      <v-container fluid>
        <MenuNavegacion/>
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
@font-face {
  font-family: 'WizardWorldSimplified';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/WizardWorldSimplified-Kxr7.ttf') format('truetype');
}
@font-face {
  font-family: 'GlamySunriseRegular-BWOKl';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/GlamySunriseRegular-BWOKl.ttf') format('truetype');
}
@font-face {
  font-family: 'HarryP-MVZ6w';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/HarryP-MVZ6w.ttf') format('truetype');
}
*{
 font-family: 'GlamySunriseRegular-BWOKl';
 font-size: 18px;

} 

main{
  background-image: url("~assets/img/img_fondoHP.jpeg");
  background-size:cover;
  background-position: 0 center;
  
}
h1, h2, h3, h4, h5, h6 {
   font-family: 'WizardWorldSimplified';
}
button{
   font-family: 'GlamySunriseRegular-BWOKl';
 
}
/* a.nuxt-link-active {
  font-weight: bold;
  color: #7b3546;
} */
a.nuxt-link-exact-active {
   color: #e39923;
}
a,
a:visited {
  text-decoration: none;
  
}

a:hover {
  color: #e39923;
}
 @media screen and (max-width:1200px){
main {
  background-image: url("~assets/img/img_fondoHPmovil.jpg");
}
} 
</style>