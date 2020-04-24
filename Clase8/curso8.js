const app = new Vue ({
  el = "#app",
  data:{
    mensaje: "Hola soy Jaime",
  },
  computed:{
    invertido(){
      return this.mensaje.split('').reverse().join('');
    }
  }
});