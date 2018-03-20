import Vue from 'vue';
import { Thread } from './models/Thread';

// reset contents
document.head.innerHTML = `
<meta charset="utf-8">
<title>テストタイトル</title>
`;
document.body.innerHTML = `
<div id="app">
  <p>{{ threads.length }}</p>
  <ul>
    <li v-for="thread in threads">
      {{ thread.id }}
    </li>
  </ul>
</div>
`;
// remove attributes
for (let i = document.body.attributes.length - 1; i >= 0; i -= 1) {
  document.body.removeAttribute(document.body.attributes[i].name);
}

class State {
  public threads: Thread[];
  constructor() {
    this.threads = [];
  }
}

const app = new Vue({
  el: '#app',
  data: new State(),
  methods: {
    setThreads(list: Thread[]) {
      this.threads = list;
    }
  }
});

const url = 'https://may.2chan.net/27/futaba.php?mode=cat';
document.cookie = 'cxyl=200x1x4';

fetch(url, { credentials: 'same-origin' })
  .then(response => {
    return response.text();
  })
  .then(text => {
    const div = document.createElement('div');
    div.innerHTML = text;
    const elementList = div.querySelectorAll('table')[1].querySelectorAll('td');
    const arr: Thread[] = [];
    Array.prototype.forEach.call(elementList, (e: Element) => {
      arr.push(new Thread(e.firstElementChild!.getAttribute('href') || ''));
    });
    app.threads = arr;
  });
