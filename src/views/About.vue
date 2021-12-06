<template>
<form action="" method="post">
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
</template>

<script>

  export default {
    data(){
      return {
        id:null,
        livro: { id: null, name : '', author : '' }
      }
    },
    methods:{
      buscar(){

        this.$http.get(`/livros/${this.id}`)
          .then(reponse => {
            this.livro = reponse.data
          })
      }
    }
  };
   
</script>
