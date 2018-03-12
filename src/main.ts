import vue from 'vue';

// reset contents
document.head.innerHTML = `
<meta charset="utf-8">
<title>テストタイトル</title>
`;
document.body.innerHTML = `
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
`;

const app5 = new vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});
