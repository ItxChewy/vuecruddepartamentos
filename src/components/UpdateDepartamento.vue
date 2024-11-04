<template>
  <div class="p-5">
    <h1>Update</h1>
    <form v-if="departamento" class="form" v-on:submit.prevent="updateDepartamento()">
      <label class="form-label">Id</label>
      <input class="form-control" disabled v-model="departamento.idDepartamento" />
      <label class="form-label">Nombre</label>
      <input class="form-control" v-model="departamento.nombre" />
      <label class="form-label">Localidad</label>
      <input class="form-control" v-model="departamento.localidad" /><br />
      <button class="btn btn-sm btn-warning">Actualizar Departamento</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "UpdateDepartamento",
  data() {
    return {
      departamento:null
    };
  },
  mounted() {
    let id = this.$route.params.id
    service.getDepartamentoId(id).then(result =>{
        this.departamento = result
    })
  },
  methods:{
    updateDepartamento(){
        service.putDepartamentos(this.departamento).then(()=>{
            this.$router.push("/")
        })
    }
  }
};
</script>

<style>
</style>