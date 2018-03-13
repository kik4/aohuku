import Vue from 'vue';

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

for (let i = document.body.attributes.length - 1; i >= 0; i -= 1) {
  document.body.removeAttribute(document.body.attributes[i].name);
}

const app5 = new Vue({
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

const url = location.href;

fetch(url, {})
  .then(response => {
    return response.text();
  })
  .then(text => {
    console.log(text);
  });
