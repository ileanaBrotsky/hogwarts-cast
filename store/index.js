
export const state = () => ({
    _estudiantes:[],
})
export const getters={
    getEstudiantes(state){
        return state._estudiantes
    },
}
export const mutations = {
     setEstudiantes(state, estudiantes) {
       state._estudiantes= estudiantes
     }
}
export const actions ={
  async recibirEstudiantes({commit}) {
    // let personajes= await this.$axios.get('http://hp-api.herokuapp.com/api/characters');
    //console.log(personajes.data[0].name);
  let estudiantes=[];
  let llegaronDatos= await this.$axios.get('http://hp-api.herokuapp.com/api/characters')
   .then(response=>{
          let i=0;
        
          for (i=0; i<response.data.length; i++){
          if(response.data[i].hogwartsStudent===true){
              estudiantes.push(response.data[i]) 
            }
          } 
          return true
          }).catch(err=>console.log(err));
          if(llegaronDatos){
    this.$axios.get('http://hp-api.herokuapp.com/api/characters/students')
  .then(response=>{
    let i=0;
    let estudiantesDosGrupos=[];
    for (i=0; i<response.data.length; i++){
       estudiantes.forEach((estudiante)=>{
          if(response.data[i].name===estudiante.name){
         estudiantesDosGrupos.push(response.data[i]);
          }
        });
      }
      commit('setEstudiantes', estudiantesDosGrupos)
    }).catch(err=>console.log(err));
  }
  else{ console.log ('No se consiguió la informción requerida')}
}
}
 
  