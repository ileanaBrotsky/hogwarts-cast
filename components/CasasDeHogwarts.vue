<template>
    <v-flex class="text-center ">
     <v-container >
       <v-row>
        <v-col  lg="3" md="6" xs="12">
          <v-sheet class=" text-center fondo_casa Gryffindor"  elevation="18"  outlined rounded shaped >
            <v-virtual-scroll  class="scroll_nombres" :items="Gryffindor" height="350" item-height="40">
                <template v-slot:default="{ item }">
                    <v-list-item class="lista_nombres_casa" :key="item.name">
                        {{ item.name}}
                    </v-list-item>
                </template>
            </v-virtual-scroll>
          </v-sheet>
        </v-col>
      <v-col lg="3" md="6" xs="12">
        <v-sheet class="text-center fondo_casa Slytherin"  elevation="18"  outlined rounded shaped >
           <v-virtual-scroll  class="scroll_nombres" :items="Slytherin" height="350" item-height="40">
              <template v-slot:default="{ item }">
                  <v-list-item class="lista_nombres_casa" :key="item.name">
                      {{ item.name}}
                  </v-list-item>
             </template>
           </v-virtual-scroll>
        </v-sheet>
      </v-col>
      <v-col  lg="3" md="6" xs="12">
        <v-sheet class="text-center fondo_casa Ravenclaw"  elevation="18"  outlined rounded shaped  >
          <v-virtual-scroll class="scroll_nombres" :items="Ravenclaw" height="350" item-height="40">
            <template v-slot:default="{ item }">
              <v-list-item class="lista_nombres_casa" :key="item.name">
                  {{ item.name}}
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-sheet>
      </v-col>
      <v-col  lg="3" md="6" xs="12">
        <v-sheet class=" text-center fondo_casa Hufflepuff"  elevation="18"  outlined rounded shaped  >
          <v-virtual-scroll  class="scroll_nombres " :items="Hufflepuff" height="350" item-height="40">
              <template v-slot:default="{ item }">
                <v-list-item class="lista_nombres_casa" :key="item.name">
                      {{ item.name}}
                </v-list-item>
             </template>
          </v-virtual-scroll>
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
  data () {
      return {
    Gryffindor:[],
    Hufflepuff:[],
    Ravenclaw:[],
    Slytherin:[],
      }
    },
  created(){
    this.$store.dispatch("recibirEstudiantes")
     let i=0;
     
          for (i=0; i<this.estudiantes.length; i++){
            switch(this.estudiantes[i].house){
              case "Gryffindor":
              this.Gryffindor.push(this.estudiantes[i]);
              break;
              case "Hufflepuff":
              this.Hufflepuff.push(this.estudiantes[i]);
               break;
              case "Ravenclaw":
              this.Ravenclaw.push(this.estudiantes[i]);
               break;
              case "Slytherin":
              this.Slytherin.push(this.estudiantes[i]);
               break;
            }  
         }
  },
}
</script>

<style>
.fondo_casa{
  background: transparent !important;
  height: 80vh;
  width: 280px;
  margin: auto;
}
.Hufflepuff{
  background-image: url("../assets/img/fondoHuf.jpg")!important;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
.Gryffindor{
  background-image: url("../assets/img/fondoGryf.jpg")!important;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
}
.Slytherin{
  background-image: url("../assets/img/fondoSlyt.jpg")!important;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
}
.Ravenclaw{
  background-image: url("../assets/img/fondoRav.jpg")!important;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
}
.scroll_nombres{
  margin-top:180px;
}
.lista_nombres_casa{
  color:white !important;
}
</style>