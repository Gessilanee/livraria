<template>
    <form method="POST" action="">
    <div id="idDiv">   
        <h5>Digite um livro:</h5>     
        <input type="text" class="form-control" id="item" placeholder="Digite um livro" style="max-width:300px;">        
    </div>
    <div class="submit">
        <v-btn text small color="primary"> Adicionar</v-btn>
    </div>
</form>
</template>

<script>

  export default {
    return:{
     message: "Enviar"
    },
  };
   
</script>
