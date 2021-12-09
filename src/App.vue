<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">CADASTRO DE LIVROS</router-link> |
      <router-link to="/feriados">Feriados nacionais</router-link> |
      <router-link to="/livros">Listar livros</router-link> |
      <router-link to="/">ESTANTE DE LIVROS</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0f968f;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
