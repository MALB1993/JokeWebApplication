//=================================================> Import generate jone module
import generateJoke from "./generateJoke";
//=================================================> Import main sass file
import './style/main.scss';
//=================================================> Import Boostrap 
import './../node_modules/bootstrap/dist/js/bootstrap.bundle';

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();