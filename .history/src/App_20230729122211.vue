<template>
  <div>
    <p>Que as gotas de chuva molhem suavemente o seu rosto.</p>
    <p>Que o vento suave refresque seu espírito.</p>
    <p>Que o sol ilumine o seu coração.</p>
    <p>Que as tarefas do dia não sejam um peso nos seus ombros.</p>
    <p>Que Deus envolva você no manto de seu amor.</p>
    <p>Que a estrada se abra à sua frente.</p>
    <p>Que o vento sopre levemente em suas costas.</p>
    <p>Que o sol brilhe morno e suave em sua face.</p>
    <p>Que a chuva caia de mansinho em seus campos.</p>
    <p>Até que nos encontremos de novo...</p>
    <p>Que Deus guarde você na palma de sua mão.</p>
    <!-- https://tailwindcss.com/docs/background-color -->
    <div class="my-3 flex items-center justify-center gap-x-6">
        <a href="#" v-on:click="openPdf" class="rounded-md bg-violet-700 px-3.5 py-2.5 text-lg font-semibold text-slate-300 shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-violet-700">O segredo para curar praticamente todas as doenças</a>
    </div>
    <Counter />
    <p class="medium">SANTO, SANTO, SANTO, É O SENHOR DAS HOSTES DO UNIVERSO</p>
    <p class="medium">918197185 3396815 138 14111963 71042 419 814</p>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {   
  mounted() {
    setTimeout(function () {
      const pdfUrl = 'a-cura-em-1minuto.pdf'
      window.open(`/${pdfUrl}`, '_self')
    }, 10000);
  },
  methods: {
    openPdf: function() {
      const pdfUrl = 'a-cura-em-1minuto.pdf'
      window.open(`/${pdfUrl}`, '_self')
    }
  },
  components: {
    Counter,
  },
  created() {
    document.title = "O JOGO INVISÍVEL";
  } 
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

.app {
  height: 100%;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
}

html {
  background: hsla(143, 100%, 29%, 0.73);
  background: linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
  background: -moz-linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
  background: -webkit-linear-gradient(0deg, hsla(52, 100%, 50%, 1) 0%, hsla(143, 100%, 29%, 1) 50%, hsla(220, 100%, 23%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#FEDD00", endColorstr="#009639", GradientType=1);
}

div {
  padding-top: 5px;
  margin: auto 10px;
  font-size: xx-large;
  align-items: center;
}

p {
  color: whitesmoke;
  text-align: center;
  line-height: normal;
  text-shadow: black 0.1em 0.1em 0.2em;
}
 
.medium {
  color: darkgrey;
  font-size: medium;
}
</style>