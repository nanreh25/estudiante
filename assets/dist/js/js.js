var usuarios = [];
// obtencion de data 
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
      if(users){
        usuarios = users;
        console.log(usuarios);
        listarUsuarios();
      }
  }).catch((e)=>{console.log('fallo')})

function listarUsuarios() {
    const tableUsuarios = document.querySelector('#table-usuarios tbody');
    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent=usuario.name;
        const td2 = document.createElement('td');
        td2.textContent=usuario.username;
        const td3 = document.createElement('td');
        td3.textContent=usuario.email;
        const td4 = document.createElement('td');
        td4.textContent=usuario.phone;
        const td5 = document.createElement('td');
        // td5.textContent=usuario.phone;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableUsuarios.appendChild(tr);
    });
    /*
    let tabla = `<table>`;

    let mostrar = '';

    mostrar = usuario.forEach(user => tabla+`<tr><th>Nombre<th><tr></table>`)

    document.querySelector('#primerColumna ').innerHTML = `<h1>hola</h1>`;*/

}






