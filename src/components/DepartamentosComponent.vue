<template>
  <div class="p-5">
    <h1 class="m-3">Departamentos Component</h1>
    <img src="../assets/images/load.gif" v-if="status == false"/>
    <table v-else class="table table-bordered table-info table-striped">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dept in departamentos" :key="dept" >
          <td>{{dept.idDepartamento}}</td>
          <td>{{dept.nombre}}</td>
          <td>{{dept.localidad}}</td>
          <td>
            <router-link class="btn btn-sm btn-secondary" :to="'/details/' + dept.idDepartamento+ '/' + dept.nombre + '/' + dept.localidad">
            Details
            </router-link>
          </td>
          <td>
            <router-link class="btn btn-sm btn-warning" :to="'/update/' + dept.idDepartamento">
              Update
            </router-link>
          </td>
          <td>
            <router-link class="btn btn-sm btn-danger" :to="'/delete/' + dept.idDepartamento">
              Delete
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamento from '../services/ServiceDepartamentos'
const service = new ServiceDepartamento();
export default {
name:"DepartamentosComponent",
data(){
  return{
    departamentos:[],
    status:false
  }
},
mounted(){
  service.getDepartamentos().then(result=>{
    this.departamentos = result
    this.status= true
  })
},methods:{

}
}
</script>

<style>

</style>