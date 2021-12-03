<template>
    <form method="POST" action="">
    <div id="idDiv">   
        <h5>Digite um livro:</h5>     
        <input v-model="id" placeholder="Digite um id de um livro" >        
    </div>
    <div class="submit">
        <v-btn text small color="primary" @click="buscar()"> Adicionar</v-btn>
    </div>

    <ul>
      <li>Nome : {{livro.name}}</li>
      <li>autor : {{livro.author}}</li>
    </ul>

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
