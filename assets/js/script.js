   

    // INGRESO DATOS DEL USUARIO

    let nombreEstudiante = prompt('Ingrese su Nombre', 'Pablo Fuenzalida')
    let nombreCarrera = prompt('Ingrese su Carrera', 'Desarrollo Web')

    // INGRESO NOTAS HTML

    let ramoHTML = prompt('Ingrese Ramo', 'HTML')
    let nota1HTML = prompt('Ingrese Nota 1 HTML', 7)
    let nota2HTML = prompt('Ingrese Nota 2 HTML', 7)
    let nota3HTML = prompt('Ingrese Nota 3 HTML', 7)
    let promedioHTML = ((parseFloat(nota1HTML))+(parseFloat(nota2HTML))+(parseFloat(nota3HTML)))/3;

    // INGRESO NOTAS CSS

    let ramoCSS = prompt('Ingrese Ramo', 'CSS')
    let nota1CSS = prompt('Ingrese Nota 1 CSS', 7)
    let nota2CSS = prompt('Ingrese Nota 2 CSS', 7)
    let nota3CSS = prompt('Ingrese Nota 3 CSS', 7)
    let promedioCSS = ((parseFloat(nota1CSS))+(parseFloat(nota2CSS))+(parseFloat(nota3CSS)))/3;


    // INGRESO NOTAS JavaScript

    let ramoJavaScript = prompt('Ingrese Ramo', 'JavaScript')
    let nota1JavaScript = prompt('Ingrese Nota 1 JavaScript', 7)
    let nota2JavaScript = prompt('Ingrese Nota 2 JavaScript', 7)
    let promedioJavaScript = ((parseFloat(nota1JavaScript))+(parseFloat(nota2JavaScript)))/3;
    


    // PLANTILLA HTML A JAVASCRIPT
    
    document.write(`


        <div class="header py-5">

            <div class="container">

                <div class="col-md-12 d-flex justify-content-between">
                        
                <h1>Notas Finales</h1>
                <img src="assets/img/logo.png" alt="desafiolatam">
                    
                </div>

            
                
                <dl>

                <dt>Nombre:  <small>${nombreEstudiante}</small></dt>
                <dt>Carrera: <small>${nombreCarrera}</small></dt>

                </dl>

                
            </div>

        </div>


        <div class="container">

            <div class="row">

                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Ramo</th>
                        <th scope="col">Nota 1</th>
                        <th scope="col">Nota 2</th>
                        <th scope="col">Nota 3</th>
                        <th scope="col">Promedio</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th scope="row">${ramoHTML}</th>
                        <td>${nota1HTML}</td>
                        <td>${nota2HTML}</td>
                        <td>${nota3HTML}</td>
                        <td>${promedioHTML}</td>
                    </tr>
                    <tr>
                        <th scope="row">${ramoCSS}</th>
                        <td>${nota1CSS}</td>
                        <td>${nota2CSS}</td>
                        <td>${nota3CSS}</td>
                        <td>${promedioCSS}</td>
                    </tr>
                    <tr>
                        <th scope="row">${ramoJavaScript}</th>
                        <td>${nota1JavaScript}</td>
                        <td>${nota2JavaScript}</td>
                    </tr>
                    
                    <tr>
                        <td>Para aprobar el ramo JavaScript con nota 4, necesitas obtener un ${promedioJavaScript} en la nota 3</td>
                    </tr>
                    </tbody>


                </table>

            </div>

        </div> 
        
    `);