<template>
<v-container fluid>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <v-col>
        <Musica_harry/>
        </v-col>
        <Datos_estudiantes/>
      </v-flex>
    </v-layout>
     <Fondo_movil/>
</v-container>
</template>

<script>
import Fondo_movil from '../components/Fondo_movil';
import Musica_harry from '../components/Musica_harry';
import Datos_estudiantes from '../components/Datos_estudiantes';
export default {
  data: () => ({
  
  }),
  components: {
    Fondo_movil,
    Musica_harry,
    Datos_estudiantes,
  },
}
</script>




