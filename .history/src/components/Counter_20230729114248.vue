<template>
  <div class="words">
    <h1 class="time">{{ text }}</h1>
    <div v-if="!timeSet">
      <span class="trial">
        <a v-bind:href="'.' + trial">
          {{ trial.substring(4).split("T").join(" ") }}</a
        >
      </span>
    </div>
  </div>
</template>

<script>
import msToFull from "../utils/time";
const search = window.location.search;
const params = new URLSearchParams(search);
const t = params.get("t");
let point = new Date(t);
//console.log(point);
let text = "loading...";

const trial = Date.now() + 1000 * 12;
/*
const trial =
  "/?t=" +
  new Date(new Date().setDate(new Date().getDate()))
    .toISOString()
    .slice(0, -5);
    */
//console.log((Date.now() + 1000 * 10)); 
let limpei = false;

export default {
  name: "Counter",
  data() {
    return {
      text,
      trial,
    };
  },
  mounted() {
    setInterval(() => {
      const diff = trial - Date.now();
      //console.log(Date.now());
      /*
      if (isNaN(diff)) {
        this.setTest("Failed. Please retry.");
        this.timeSet = false;
      }
      if (diff < 0) {
        this.setTest("Please give the correct date & time.");
        this.timeSet = false;
      } else {
        const out = msToFull(diff);
        this.setTest(out);
      }
      */      
      if (diff>0) {
        const out = msToFull(diff);
        this.setTest(out);
      } else {
        if (limpei===false) {
          limpei = true;
          this.setTest('');
        }        
        this.text = this.text + '.';
      }
    }, 1000);
  },
  beforeCreate() {
    this.timeSet = true;
  },
  methods: {
    setTest(t) {
      this.text = t;
    },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.words {
  margin: auto 0px 20px;
  width: 100%;
  text-align: center;
  text-align: center;
}

.trial {
  background-color: grey;
  color: azure;
  border-radius: 5px;
  padding: 3px 5px 3px 5px;
  text-align: center;
}

.time {
  font-size: 1.5rem;
}

a:link,
a:hover,
a:active,
a:visited {
  color: white;
}
</style>
