<template>
  <div class="p-5">
    <h1>DELETE</h1>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'
const service = new ServiceDepartamentos()
export default {
name:"DeleteDepartamento",
mounted(){
  let id = this.$route.params.id
  service.deleteDepartamento(id).then(()=>{
    this.$router.push("/")
  })
},
}
</script>

<style>

</style>