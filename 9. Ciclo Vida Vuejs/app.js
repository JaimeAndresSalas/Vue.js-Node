const app = new Vue({
  el:'#app',
  data:{
    saludo: 'Esto es un ciclo de vida con Vue',
  },
  beforeCreate() {
    console.log('BeforeCreate');
  }
})