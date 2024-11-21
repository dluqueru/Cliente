const gameForm = document.getElementById('gameForm');
const divStatus = document.getElementById('status');


gameForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://intranetjacaranda.es/Ejercicios/games.php');

    const formData = new FormData(document.getElementById('gameForm'));
    xhr.send(formData);
    
    xhr.addEventListener('load', function(){
        divStatus.append(xhr.responseText);
    })
})