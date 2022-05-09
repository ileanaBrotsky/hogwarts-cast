<template>
  <v-col>
      <v-btn elevation="6"  @click="playNotification()"> 
          <v-icon color="primary"> mdi-music</v-icon>
      </v-btn>
  </v-col>
</template>

<script>
const notificationSound = require("@/assets/ringtones-harry-potter.mp3").default;
export default {
 data: () => ({
   andando: false,
   notificationSound,
  }),
  methods: {
     playNotification() {
      var audio = new Audio(this.notificationSound);
       if (this.andando===false) {
        audio.play (); // play
        this.andando = true;
          console.log(this.andando);
      } else {
        audio.pause (); // pausa
        this.andando=false;
          console.log(this.andando);
        }
     },
  }
}
     </script>