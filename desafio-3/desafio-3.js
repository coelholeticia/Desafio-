let form = document.getElementById('formulario');
let campo = document.getElementById('texto');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let campo = document.getElementById('texto').value;
    console.log(campo);

    
    function convertirCaracterAEntero(caracter) {

        switch (caracter) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }
    
    function convertirRomanoAEntero(romano) {
        
        if (typeof romano != 'string') {
            return null;
        }
    
        let numero = convertirCaracterAEntero(romano.charAt(0));
        let anterior;
        let actual;
    
        for (let i = 1; i < romano.length; ++i) {
            actual = convertirCaracterAEntero(romano.charAt(i));
            anterior = convertirCaracterAEntero(romano.charAt(i - 1));
    
            if (actual <= anterior) {
                numero += actual;
            } else {
                numero = numero - anterior * 2 + actual;
            }
        }
    
        return numero;
    }

    console.log(convertirRomanoAEntero(campo));

    const novoElemento = document.querySelector("form");
    const paragrafoNew = document.createElement("p");
    paragrafoNew.textContent = `Valor Romano ${convertirRomanoAEntero(campo)} `;
    novoElemento.appendChild(paragrafoNew);
    
   
});