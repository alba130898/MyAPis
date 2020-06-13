document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {
    //Crear el objeto XHML
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'datos.txt', true);
    
    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);

        if(this.readyState === 4 && this.status === 200 ){
            
        }
    }
    xhr.send();
} 