<template>
  <div class="home">
    <form action="" method="post" @submit.stop.prevent="send">
    <div>
        <label for="nome">Nome do livro:</label>
        <input  v-model="livro.name" type="text" id="nome" name="nome"/>
    </div>
    <div>
        <label for="author">Autor:</label>
        <input v-model="livro.author" type="text" id="author" name="author"/>
    </div>
    <div>
        <label for="description">Descrição:</label>
        <textarea v-model="livro.description" id="description" name="description"></textarea>
    </div>
    <input type="button" value="Enviar" onclick="msg()">
   </form> 
   <br>
   <br>

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
