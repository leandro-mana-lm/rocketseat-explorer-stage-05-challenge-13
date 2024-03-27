const container = document.querySelector('.container');
const [content, result] = document.querySelectorAll('.content');
const fortuneCookie = document.querySelector('#fortune-cookie');
const fortune = document.querySelector('.fortune');
const button = document.querySelector('.btn');

const fortunes = [
  'As ondas do mar eventualmente levam à novas terras. Esteja pronto para explorar novos horizontes.',
  'Um encontro inesperado trará alegrias e oportunidades. Mantenha o coração e a mente abertos.',
  'A persistência é a chave do sucesso. Não desista, pois o próximo passo pode ser o da vitória.',
  'A sabedoria começa na reflexão. Reserve um momento para olhar para dentro e descobrirá tesouros escondidos.',
  'A verdadeira felicidade surge das relações que cultivamos. Valorize os que estão ao seu lado.',
];

const changeContent = () => {
  container.classList.toggle('result');
  content.classList.toggle('hide');
  result.classList.toggle('hide');
};

const showContent = () => {
  const index = Math.round(Math.random() * 4);
  const result = fortunes[index];

  fortune.textContent = result;

  changeContent();
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const action = result.classList.contains('hide')
      ? showContent
      : changeContent;

    action();
  }
});

fortuneCookie.addEventListener('click', () => {
  showContent();
});

button.addEventListener('click', () => {
  changeContent();
});
