var DataPartidos = {
    "partidos":[
        {
            "september":[
                {         
                    "fecha":"9/01",
                    "local":"U1",
                    "visitante":"U4",
                    "location":"AJ Katzenmaier",
                    "hora": "9:30 a.m"
                    },
                  {
                    "fecha":"9/01",
                    "local":"U3",
                    "visitante":"U2",
                    "location":"Greenbay",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"9/08",
                    "local":"U5",
                    "visitante":"U6",
                    "location":"Howard A Yeager",
                    "hora": "9:30 a.m."
                  },
                  {          
                    "fecha":"9/08",
                    "local":"U6",
                    "visitante":"U1",
                    "location":"Marjorie P Hart",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"9/15",
                    "local":"U2",
                    "visitante":"U4",
                    "location":"North",
                    "hora": "9:30 a.m."
                  },
                  {
                    "fecha":"9/15",
                    "local":"U3",
                    "visitante":"U5",
                    "location":"AJ Katzenmaier",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"9/22",
                    "local":"U1",
                    "visitante":"U3",
                    "location":"South",
                    "hora": "9:30 a.m."
                  },
                  {
                    "fecha":"9/22",
                    "local":"U2",
                    "visitante":"U6",
                    "location":"Howard A Yeager",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"9/29",
                    "local":"U4",
                    "visitante":"U5",
                    "location":"Greenbay",
                    "hora": "9:30 a.m."
                  }
            ],
            "october":[
                {
                    "fecha":"10/6",
                    "local":"U2",
                    "visitante":"U5",
                    "location":"Marjorie P Hart",
                    "hora": "9:30 a.m."
                  },
                  {
                    "fecha":"10/6",
                    "local":"U1",
                    "visitante":"U6",
                    "location":"South",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"10/13",
                    "local":"U3",
                    "visitante":"U4",
                    "location":"Howard A Yeager",
                    "hora": "9:30 a.m."
                  },
                  {
                    "fecha":"10/13",
                    "local":"U5",
                    "visitante":"U1",
                    "location":"Greenbay",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"10/20",
                    "local":"U6",
                    "visitante":"U3",
                    "location":"North",
                    "hora": "9:30 a.m."
                  },
                  {
                    "fecha":"10/20",
                    "local":"U2",
                    "visitante":"U4",
                    "location":"Marjorie P Hart",
                    "hora": "1:00 p.m."
                  },
                  {
                    "fecha":"10/27",
                    "local":"U3",
                    "visitante":"U1",
                    "location":"AJ Katzenmaier",
                    "hora": "9:30 a.m."
                  },
                  {
                    "fecha":"10/27",
                    "local":"U5",
                    "visitante":"U6",
                    "location":"Howard A Yeager",
                    "hora": "1:00 p.m."
                  }
            ]
        }
    ]
}


// Filtrado de los equipos *****************************************************************************************************

let september = DataPartidos.partidos[0].september;
let october = DataPartidos.partidos[0].october;

function Selecteam() {
    let e = document.getElementById("selector");
    let selectorstate = e.options[e.selectedIndex].value;
    
    let ArrayConSelector1 = [];
    let ArrayConSelector2 = [];
    
    let table1 = [];
    let table2 = [];


    for (const i of september) { //Bucle que recorre los estados de la matriz
      table1.push(i);
      if (i.local== selectorstate || i.visitante == selectorstate){
        ArrayConSelector1.push(i);
      }      
    }

    for (const i of october) { //Bucle que recorre los estados de la matriz
      table2.push(i);
      if (i.local== selectorstate || i.visitante == selectorstate){
        ArrayConSelector2.push(i);
      }      
    }

    if (e.selectedIndex == 1 || e.selectedIndex == 0) { // Condicion para cuando escoga all imprima base de datos entera
        app.september=table1; //Igualamos nuestro array generado por la funcion a nuestro objeto Vue.
        app.october=table2; //Igualamos nuestro array generado por la funcion a nuestro objeto Vue. 
      }else{
        app.september=ArrayConSelector1; //Igualamos nuestro array generado por la funcion a nuestro objeto Vue.
        app.october=ArrayConSelector2; //Igualamos nuestro array generado por la funcion a nuestro objeto Vue.        
      }

}

// Objeto vue ********************************************************************************************************************

let app = new Vue({  
    el: '#app',
    data:{
        september:DataPartidos.partidos[0].september,
        october:DataPartidos.partidos[0].october,
    }
});


// Alerts ************************************************************************************************************************

function InicioAlert() {
    alert('Escoge un icono para avanzar.');
}

function CalendarioAlert() {
  alert('Te mostramos el calendario entero de todos los partidos. ');
}

function EquipoAlert() {
    alert('Escoge un equipo en el selector y veras su calendario.');
}

function UbicacionAlert() {
    alert('Selecciona una ubicacion y te enviaremos sus coordenadas por googlemaps.');
}

