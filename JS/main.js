// Call Elements
let thank = document.querySelector('.thanks');
let rate= document.querySelector('.rating');
let sub = document.querySelector('[type="submit"]');
let parent= document.querySelector('.container');
let ul = document.querySelector('ul');

// Remove thanks card
thank.remove();

let list = [];
let c =0;
ul.addEventListener('click', (x) => {
  if (x.target.nodeName == 'LI') {
    let paint = `background-color: hsl(217, 12%, 63%);color: #fff;`;
    x.target.style.cssText= paint;
    c++;
    list.push(c);
    if (list.length > 1) {
      for(let i =0; i < ul.children.length; i++) {
        ul.children[i].style='';
      }
      x.target.style.cssText= paint;
    }
    window.sessionStorage.setItem('choice', x.target.textContent);
  }
});


sub.addEventListener('click', () => {
  if (sessionStorage.getItem('choice')) {
    parent.append(thank);
    thank.getElementsByClassName('result')[0].textContent= `You selected ${sessionStorage.getItem('choice')} out of 5`;
    rate.remove();
    list=[];
  }
});