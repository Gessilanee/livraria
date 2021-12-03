<template>
  <div class="home">
    <h1>Feriados</h1>

      <ul>
        <li v-for="feriado in feriados" v-bind:key="feriado.name">
          {{feriado.name}} {{feriado.date}} {{feriado.type}}
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: "Feriados",
  data(){
    return {
      feriados:[]
    }
  },
  methods: {
    async getHolidays() {
      const response = await fetch(
        "https://brasilapi.com.br/api/feriados/v1/2021"
      );
      const data = await response.json();
      return data
    },
  },
  mounted(){

    this.getHolidays()
      .then( data => {
        this.feriados = data
      } )
  },
};
</script>
