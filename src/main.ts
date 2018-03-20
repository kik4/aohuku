import Vue from 'vue';
import App from './components/App.vue';

// reset contents
document.head.innerHTML = `
<meta charset="utf-8">
<title>テストタイトル</title>
`;
document.body.innerHTML = `
<div id="app"></div>
`;
// remove attributes
for (let i = document.body.attributes.length - 1; i >= 0; i -= 1) {
  document.body.removeAttribute(document.body.attributes[i].name);
}

new Vue({
  el: '#app',
  render: h => h(App)
});
