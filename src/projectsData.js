import FacebookIMG from './images/facebook.PNG';
import recipesAppProject from './images/recipesAppProject.PNG';
import binemonAppProject from './images/binemonApp.PNG';
const projectsData = [
  {
    name: 'Facebook Login Page',
    image: FacebookIMG,
    description: 'Projeto desenvolvido com a finalidade de praticar Redux e suas funcionalidades, entender a ideia de autenticação(feita somente por front-end) e aplicar conhecimentos em CSS para chegar a resultados parecidos com o site oficial do Facebook.',
    gitHubLink: 'https://github.com/Hugosomers/facebookProject',
    projectAccessLink: 'https://hsfacebookproject.netlify.app/',
  },
  {
    name: 'Recipes App',
    image: recipesAppProject,
    description: 'Projeto em grupo na Trybe, o objetivo era desenvolver um aplicativo de consulta das mais variadas receitas de comidas e drinks disponíveis nas APIs passadas pela Trybe.',
    gitHubLink: 'https://github.com/tryber/sd-011-project-recipes-app/pull/35',
    projectAccessLink: 'https://hsrecipesappproject.netlify.app',
  },
  {
    name: 'Binemon Search App',
    image: binemonAppProject,
    description: 'Projeto pessoal criado para amigos que o pediram, o objetivo era desenvolver uma aplicação de consulta de bonecos de um jogo NFT, a consulta era feita pelo ID do boneco que buscava pela API que o jogo possui. A aplicação mostra todas as informações do boneco e compara a combinação de poderes, classe e raça que aquele boneco em específico possui e retorna um visual, identificando o boneco como bom para compra ou ruim.',
    gitHubLink: 'https://github.com/Hugosomers/portfolio/pull/5',
    projectAccessLink: 'https://hsbinemonsearchproject.netlify.app/',
  },
];

export default projectsData;
