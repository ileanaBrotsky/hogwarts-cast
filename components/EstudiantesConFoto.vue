<template>
    <v-container>
      <v-row>
        <template  v-for= "(estudiante, index) in estudiantes" >
                <v-card v-if= "estudiante.image != ''"  class=" tarjeta pa-3 ma-2 text-center" elevation="18" width="350px" heigth="90px"  rounded shaped  :key="index">
                    <v-row>
                        <v-col class="foto ">
                           <img :src= "(estudiante.image )"   alt= "">  
                         </v-col>
                        <v-col>
                           <h3> {{estudiante.name}} </h3> 
                            <button class="mt-1 btn-verMas" @click="abrirModal(index)"> <v-icon class="mr-1 ojo" >mdi-eye</v-icon>  Ver mas...</button>
                        </v-col>       
                    </v-row>
                </v-card>
        </template> 
       </v-row>
        <v-container fluid v-if="mostrarModal"  @click="cerrarModal" class="contenedor-modal">
            <v-card  class="modal-datos__completos">
                <button class="mt-1 btn-verMas" @click="cerrarModal"> <v-icon class="mr-1 ojo" >mdi-eye-off</v-icon> </button>
                
                <v-container fluid class="layout_infoPersonaje text-center pa-3">
                   
                    <div class="nombre_personaje"> 
                    <h1 class="mb-3">{{nombre}}</h1>
                    <p>Pertenece a la casa de  {{casa}}</p> 
                    </div>
                     <div class="foto_personaje" > 
                        <img :src="imagen" shaped rounded elevation="18" alt="foto personaje" />  
                     </div>
                            
                    <div class="titulo-varita" >
                        <h6>Materiales de la varita</h6>
                    </div>
                    <div class="div-Varita"> 
                        <img src="~/assets/img/varita.png" width="90px" alt="varita magica">
                    </div>
                    <div class="info_varita">
                      
                    <v-col v-if="(varita.core!='')"    class="text-left"> 
                         <p> - Corazón: {{varita.core}} <br> 
                        - Longitud: {{varita.length}} <br> 
                         - Madera: {{varita.wood}}</p> 
                    </v-col>
                     <v-col v-else >
                        <p>No hay información</p>
                    </v-col> 
                    </div>
               
            </v-container>   
            </v-card>
      </v-container>
    </v-container>
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
          mostrarModal: false,
          nombre: 'pruebaNombre',
          casa: 'pruebaCasa',
          varita: [],
          imagen: '',
          nacimiento: 'date'
    }
    },
  created(){
    this.$store.dispatch("recibirEstudiantes")
  },
  mounted(){
      // console.log(this.estudiantes)
  },
  methods:{
      abrirModal: function(key){
        this.mostrarModal=true;
        this.nombre=this.estudiantes[key].name;
        this.varita= this.estudiantes[key].wand;
         this.casa=this.estudiantes[key].house;
        this.imagen= this.estudiantes[key].image;
       // console.log(  this.varita= this.estudiantes[key].wand);
      },
       cerrarModal: function(){
        this.mostrarModal=false;
      }

  }
}
</script>

<style>
.tarjeta {
  background-image: url("~assets/img/fondoCard2.jpg")!important; 
 background-position: cover; 

} 
 
.foto {
   border-radius:5px 0 0 5px ;
   max-width: 90px;
   min-width: 90px;
    height: 90px;
    margin: 0;
    padding:0;
    overflow: hidden;
}
.foto img{
width: 90px;
     border-radius:5px 0 0 5px ;
}
.btn-verMas{
    color:rgb(107, 107, 118);
    float: right;
}
.btn-verMas:hover{
    color: #2a1e0c;
}
.btn-verMas:hover .ojo{
    color: #382404;
}
/*modal que se abre al clickear ver mas*/
.contenedor-modal{
    
    background: rgba(49, 48, 48, 0.6);
    height: 100vh;
     position: fixed;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%) ;
}
.modal-datos__completos{
    margin:0;
    padding: 10px;
    min-width: 30%;
    
    height: 80vh;
    background-color:transparent!important;
    background-image: url("../assets/img/fondoModalCompleto.png")!important;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    position: fixed;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%) ;
}
.layout_infoPersonaje{
    width: 95%;
    position: relative;
    top: 10%;
    margin:0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 50% 20% 1fr;
    grid-template-rows: 22vh 3vh 1fr;
    grid-template-areas:
    "nombre_personaje nombre_personaje foto_personaje"
    "titulo-varita titulo-varita titulo-varita"
    "foto_varita info_varita info_varita";   
}
.nombre_personaje{
    grid-area: nombre_personaje;
    font-size: 42px;
}
.nombre_personaje h1{
      font-size: 0.7em;
}
.foto_personaje{
    grid-area: foto_personaje;
   padding: 5px;
}
.foto_personaje img{
    border-radius: 5px;
   width: 95px;
   box-shadow: #382404 -3px 10px 8px 0;
}
.titulo-varita{
    margin-top: 25px ;
    grid-area: titulo-varita;
   
}

.div-Varita{
   grid-area: foto_varita;
   
   padding:2px;
    margin-top: 20px ;
   
}
.info_varita{
      margin-top: 20px ;
    border-left: #382404 solid 3px;
    grid-area: info_varita;
}
 @media screen and (max-width:900px){
.modal-datos__completos{
 top:50%;
 left:50%;
 width: 400px;
}
.layout_infoPersonaje{
    width: 100%;
}
} 
@media screen and (max-width:400px){
.modal-datos__completos{
 top:50%;
 left:50%;
 width: 320px;
}
.layout_infoPersonaje{
    width: 100%;
}
} 
</style>