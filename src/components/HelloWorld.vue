<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                LIVROS
            </v-col>
        </v-row>
         <v-row>
            <v-col
                v-for="(book, i) in HelloWorld"
                :key="i"
                cols="12"
                md="4"
                lg="2"
                >
                <v-card class="mx-auto">
                    <v-card-title>{{ book.name }}</v-card-title>
                    <v-card-text>Autor:{{ book.author }}
                                 Descrição:{{ book.description | truncate 50 }}
                    </v-card-text>
                    

                        <v-card-actions>
                            <v-btn text small color="primary" @click="deletelivro(book.id)"> Excluir </v-btn>
                        </v-card-actions>
                </v-card>  
             </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default{
        name: 'HelloWorld',
        data(){
            return{
               HelloWorld:[],
            };
        },
        methods: {
        async getHolidays() {
        const response = await fetch(
            "http://localhost:3000/livros"
        );
        const data = await response.json();
        return data
        },


         async deletelivro(id){
             const req = await fetch(`http://localhost:3000/livros/${id}`,{
                 method: "DELETE"
             });
             const res = await req.json
             console.log(res);

            this.getHolidays();
             //window.location="/";

             ;
         }

  },
  mounted(){

    this.getHolidays()
      .then( data => {
        this.HelloWorld = data
      } )
  },
};

</script>

<style scoped>
.mx-auto{
    text-align: justify;
}
</style>