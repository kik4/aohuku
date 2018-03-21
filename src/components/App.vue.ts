import Vue from 'vue';
import { Thread } from '../models/Thread';

class State {
  public threads: Thread[];
  constructor() {
    this.threads = [];
  }
}

export default Vue.extend({
  data() {
    return new State();
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      const url = 'https://may.2chan.net/27/futaba.php?mode=cat';
      document.cookie = 'cxyl=200x1x4';

      console.log(url);

      fetch(url, { credentials: 'same-origin' })
        .then(response => {
          return response.text();
        })
        .then(text => {
          const div = document.createElement('div');
          div.innerHTML = text;
          const elementList = div
            .querySelectorAll('table')[1]
            .querySelectorAll('td');
          const arr: Thread[] = [];
          Array.prototype.forEach.call(elementList, (e: Element) => {
            arr.push(
              new Thread(e.firstElementChild!.getAttribute('href') || '')
            );
          });
          this.threads = arr;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});
