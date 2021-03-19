
const listContainer = document.querySelector('nav ul');
const mainEle = document.querySelector('body main');
const container = document.querySelector("main div.container");
const h1   = container.children[0];
const h2   = container.children[1];
const p1   = container.children[2];
const p2   = container.children[4];
const link = container.children[5];
const images = ['./images/autumn-2.jpg', './images/coruh-river.jpg', './images/autumn.jpg','./images/hydrangea.jpg', './images/water-fl.jpg'];
const data = [
  {
    heading2: "Link 1 is Clicked",
    heading1: "Greeny Mountain",
    para1:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia.",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque esse aliquid non! Facere impedit mollitiaconsequuntur asperiores nisi aliquam dolorum saepe facilis quaerat, quo eos reiciendis at perferendis iure molestiae similique pariatur voluptatum assumenda tempore iusto explicabo? Odit aliquam, rerum ducimus asperiores perspiciatis tempore recusandae ab a corrupti, unde culpa ratione optio, ullam obcaecati est ipsa id dignissimos labore.",

    img : './images/pizza-bg.jpg',
    a : 'Some Link'
  },
  {

    heading2: "Link 2 is active",
    heading1: "Beautiful Sun Shine Scene",
    para1:
      " sed repellendus nostrum sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia.",
    para2:
      "dolor sit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquis",
    a : 'Random Text'
  },
  {
    heading2: "Link 3 is Clicked",
    heading1: "Sky and the mountains",
    para1:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia.",
    para2:
      "Lorem ipsum dolor nsequuntur asperiores nisi aliquam dolorum saepe facilis quaerat, quo eos reiciendis at perferendis iure molestiae similique pariatur voluptatum assumenda tempore iusto explicabo? Odit aliquam, rerum ducimus asperiores perspiciatis tempore recusandae ab a corrupti, unde culpa ratione optio, ullam obcaecati est ipsa id dignissimos labore.",

    a : 'Lorem Ipsum'
  },
  {
    heading2: "Link 4 is active",
    heading1: "Water Flower",
    a : 'Sit Amet',
    para1:
      " sed repellendus nostrum sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia.",
    para2:
      "dolor sit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquissit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquissit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquissit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquissit amet consectetur adipisicing elit. Iste omnis inventore sed repellendus nostrum sinquis ",
  },
  {
    heading2: "Link 5 is active",
    heading1: "Beautiful Flower",
    a : 'Random Link',
    para1:
      " sed repellendus nostrum sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia.",
    para2:
    " sed repellendus nostrum sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia. sinquis, officia impedit odio dolorem. Voluptatum quidem quod temporibus quibusdam rerum vel consectetur, illoerror maxime commodi nisi, libero officia placeat doloremque repellendus, atque omnis obcaecati ipsa quasiitaque. Maiores corporis sapiente mollitia eius quia.",
  },

];

listContainer.addEventListener('click', (e)=>{
  const targetId = e.target.id;
  const parent = e.target.parentElement.children;
  for(var i=0; i<parent.length; i++){
    parent[i].classList.remove('active');
  }
  
  e.target.classList.add('active');

  h1.textContent = data[targetId].heading1; 
  h2.textContent = data[targetId].heading2;
  link.textContent = data[targetId].a;
  p1.textContent = data[targetId].para1; 
  p2.textContent = data[targetId].para2;
  mainEle.style.backgroundImage = `url("${images[targetId]}")`;
});
