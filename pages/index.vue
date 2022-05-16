<template>
<v-container fluid>
      <FondoMovil/>
</v-container>
</template>

<script>
import FondoMovil from '../components/FondoMovil';
import MusicaHarry from '../components/MusicaHarry';
import DatosEstudiantes from '../components/DatosEstudiantes';

export default {
  /*llamada al store para traer la variable global counter*/
  computed:{
    counter(){
      return this.$store.getters['getCounter']
    },
  },
   methods:{
  /*llama a la accion del store que, a su vez invoca la mutacion del state*/ 
    llamarASumarDos(){
      this.$store.dispatch('sumarDos')

      }
   },
  data: () => ({
  
  }),
  components: {
    FondoMovil,
    MusicaHarry,
    DatosEstudiantes,
  },
}
</script>




