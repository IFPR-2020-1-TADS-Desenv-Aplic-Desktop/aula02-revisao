const principal = document.querySelector('#principal');
console.log(principal);

let contador = 0;

principal.addEventListener('click', () => {
  contador++;
  principal.innerHTML = `Mudando: ${contador} vezes`;

  const titulo = document.querySelector('h1');
  titulo.style.backgroundColor = '#5f8669';

  const alguem = document.querySelector('.me-encontre');
  // alguem.classList.add('feio');
  alguem.classList.toggle('feio');
});
