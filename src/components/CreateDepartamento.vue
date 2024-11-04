<template>
  <div class="p-5">
    <h1>Create</h1>
    <h2>{{mensaje}}</h2>
    <form class="form" v-on:submit.prevent="insertDepartamento()">  
      <label class="form-label">Id</label>
      <input class="form-control" v-model="departamento.idDepartamento">
      <label class="form-label">Nombre</label>
      <input class="form-control" v-model="departamento.nombre">
      <label class="form-label">Localidad</label>
      <input class="form-control" v-model="departamento.localidad"><br>
      <button class="btn btn-sm btn-primary" >Crear Departamento</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'

const service = new ServiceDepartamentos()

export default {
name:"CreateDepartamento",
data(){
  return{
    mensaje:"",
    departamento:{
      idDepartamento:0,
      nombre:"",
      localidad:""
    }
  }
},
methods:{
  insertDepartamento(){
    service.postDepartamentos(this.departamento).then(result =>{
      this.mensaje = "Insertado correctamente " + result
      this.$router.push("/")
    })
  }
}
}
</script>

<style>

</style>