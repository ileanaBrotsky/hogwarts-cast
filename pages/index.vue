<template>
<v-container fluid>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <v-col>
        <MusicaHarry/>
        </v-col>
        <DatosEstudiantes/>
      </v-flex>
    </v-layout>
     <FondoMovil/>
</v-container>
</template>

<script>
import FondoMovil from '../components/FondoMovil';
import MusicaHarry from '../components/MusicaHarry';
import DatosEstudiantes from '../components/DatosEstudiantes';
export default {
  data: () => ({
  
  }),
  components: {
    FondoMovil,
    MusicaHarry,
    DatosEstudiantes,
  },
}
</script>




