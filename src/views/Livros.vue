<template>
  <div class="home">
    <h1>Livros</h1>

      <p>A listagem dos livros é assim</p>

      <ul>
        <li v-for="livro in livros" v-bind:key="livro.id">
          {{livro.name}} {{livro.author}}
        </li>
      </ul>
      <br>
  <form action="" method="post" @submit.stop.prevent="send">
    <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="name"/>
    </div>
    <div>
        <label for="email">Autor:</label>
        <input type="text" id="author" name="author"/>
    </div>
    <div>
        <label for="msg">Descrição:</label>
        <textarea id="description" name="description"></textarea>
    </div>
    <input type="button" value="Enviar" onclick="msg()">
</form>
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
