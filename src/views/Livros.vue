<template>
  <div class="home">
    <h1>Livros</h1>

      <p>A listagem dos livros é assim</p>

      <ul>
        <li v-for="livro in livros" v-bind:key="livro.id">
          {{livro.name}} {{livro.author}}
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: "Livros",
  data(){
    return {
      livros:[]
    }
  },
  methods: {

  },
  mounted(){

    this.$http.get('/livros')
      .then(response => {

        this.livros = response.data

      })

  },
};
</script>
