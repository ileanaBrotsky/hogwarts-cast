<template>
      <v-btn  @click="andando=!andando">  
        <v-icon color="primary"> mdi-music</v-icon>
      </v-btn>
  </template>

<script>
const notificationSound = require("@/assets/ringtones-harry-potter.mp3").default;
export default {
 data: () => ({
   andando: false,
   notificationSound,
   audio:null,
  }),
  watch:{
    andando(val){
  if(val){
    this.audio= new Audio(this.notificationSound);
    this.audio.play();
  } else{
    this.audio.pause();
  }
}
  },

}
     </script>