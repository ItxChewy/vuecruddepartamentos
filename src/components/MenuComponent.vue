<template>
  <div>
     <nav
      class="navbar navbar-expand-sm navbar-dark bg-success"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand nav-link" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/create">Create Departamentos</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/customer"
                >Customers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/empleadodetalle"
                >Empleado Detalles</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Dropdown</a
              >
              <ul class="dropdown-menu">
                
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
name:"MenuComponent"
}
</script>

<style>

</style>