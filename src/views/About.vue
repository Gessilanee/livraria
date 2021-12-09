<template>
  <div class='container'>
    <v-col>
       
        <center><h1>Cadastro de livros</h1></center>
          <v-row justify="center"/>
          <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
          />
      </v-col>

    <form id="burger-form" @submit='createLivro'>
      <div class="input-container">
        <label for="name">Nome do Livro</label>
        <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="author">Autor</label>
        <input type="text" id="author" name="author" v-model="author" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="description">Descrição</label>
        <textarea type="text" id="description" name="description" v-model="description" placeholder="Digite o seu nome" rows="5" cols="33"/>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Cadastrar">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data(){
        return {
          errorMessages: '',
          name: null,
          author: null,
          description: null,
          formHasErrors: false,
        }
    },
    
    methods: {

    async createLivro(e) {
        e.preventDefault();
            
             const data = {
                name: this.name,
                author: this.author,
                description: this.description,
             }
            const dataJson = JSON.stringify(data)    
            const req = await fetch("http://localhost:3000/livros", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });
            const res = await req.json();
            console.log(res)

            //limprar os campos

            this.name="";
            this.author="";
            this.description="";

            window.location="/";

            
        },
    },
    }
</script>

<style scoped>
.logo {
  margin-top: -160px
}

h1{
  color: rgb(0, 0, 0);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  margin-top: -190px;
  margin-left: 150px;
}
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #0d5f69;
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color:#42b983;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>