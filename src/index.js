//=================================================> Import generate jone module
import generateJoke from "./generateJoke";
//=================================================> Import main sass file
import './style/main.scss';
//=================================================> Import laughing
// import langhig from "./assets/laughing.svg";


// const langhig = document.getElementById('langhig');
// langhig.src = langhig;


const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();