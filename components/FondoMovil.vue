<template>
  <v-flex>
       <v-col class="estrella estrella1">
         <v-icon color="info"> mdi-star </v-icon>
      </v-col>
        <v-col class="estrella estrella2">
         <v-icon color="error"> mdi-star </v-icon>
        </v-col>
         <v-col class="estrella estrella3">
           <v-icon color="warning"> mdi-star </v-icon>
          </v-col>
       <v-col class="estrella estrella4">
         <v-icon color="info"> mdi-star </v-icon>
      </v-col>
       <v-col class="estrella estrella5">
         <v-icon color="primary"> mdi-star </v-icon>
      </v-col>
       <v-col class="estrella estrella6">
         <v-icon color="error"> mdi-star </v-icon>
      </v-col>
       <v-col class="estrella estrella7">
         <v-icon color="accent"> mdi-star </v-icon>
      </v-col>
       <v-col class="estrella estrella8">
         <v-icon color="warning"> mdi-star </v-icon>
      </v-col>
  </v-flex>
</template>

<script>
export default {

}
</script>

<style>
.estrella{
    width: 20px;
    height: 20px;
    position: absolute;
    
}
.estrella1{
    right: 10%;
    top: 10%;
    animation: t1 8s ease infinite;
}
.estrella2{
   top: 35%;
   left:10%;
   animation: t2 9s ease infinite;
}
.estrella3{
     left: 10%;
    animation: t3 7s ease infinite;
   
}
.estrella4{
    top: 45%;
    left: 50%;
    animation: t4 7s ease infinite;
   
}
.estrella5{
    left: 30%;
    animation: t5 7s ease infinite;
   
}
.estrella6{
   top: 40%;
    left: 70%;
    animation: t6 7s ease infinite;
   
}
.estrella7{
    top:20%;
    right: 10%;
    animation: t7 7s ease infinite;
   
}
.estrella8{
  
    right: 30%;
    animation: t8 7s ease infinite;
   
}
/*animaciones*/
@keyframes t1{
    0%{
        transform: rotate(45deg) translateY(0px);
    }
    50%{
        transform: rotate(45deg) translateY(20px);
    }
    100%{
        transform: rotate(45deg) translateY(0px);
    }
}
@keyframes t2{
    0%{
        transform: rotate(65deg) translateX(0px);
    }
    50%{
        transform: rotate(65deg) translateX(20px);
    }
    100%{
        transform: rotate(65deg) translateX(0px);
    }
}

@keyframes t3{
    0%{
        transform: rotate(45deg) translateY(0px);
    }
    30%{
        transform: rotate(45deg) translateY(10px);
    }
    70%{
        transform: rotate(45deg) translateX(10px);
    }
     90%{
        transform: rotate(45deg) translateX(0px);
    }
    100%{
        transform: rotate(45deg) translateY(0px);
    }
    
}
@keyframes t4{
    0%{
        transform: rotate(75deg) translateY(0px);
    }
    30%{
        transform: rotate(75deg) translateY(20px);
    }
    50%{
        transform: rotate(75deg) translateX(20px);
    }
    75%{
        transform: rotate(75deg) translateX(0px);
    }
    100%{
        transform: rotate(75deg) translateY(0px);
    }
    
}
@keyframes t5{
    0%{
        transform: rotate(45deg) translateY(0px);
    }
    50%{
        transform: rotate(45deg) translateY(20px);
    }
    100%{
        transform: rotate(45deg) translateY(0px);
    }
    
}
@keyframes t6{
    0%{
        transform: rotate(45deg) translateY(0px);
    }
    50%{
        transform: rotate(45deg) translateY(20px);
    }
    100%{
        transform: rotate(45deg) translateY(0px);
    }
    
}
@keyframes t7{
    0%{
        transform: rotate(45deg) translateY(0px);
    }
    50%{
        transform: rotate(45deg) translateY(40px);
    }
    100%{
        transform: rotate(45deg) translateY(0px);
    }
    
}
@keyframes t8{
    0%{
        transform: rotate(45deg) translateY(0px);
    }
      30%{
        transform: rotate(45deg) translateY(20px);
    }
      50%{
        transform: rotate(45deg) translateX(20px);
    }
    70%{
        transform: rotate(45deg) translateX(0px);
    }
    100%{
        transform: rotate(45deg) translateY(0px);
    }
    
}

</style>