let list = [];
let mass = document.querySelector('#peso');
let temperature = document.querySelector('#temp');
let time = document.querySelector('#time');
let speed = document.querySelector('#speed');
let volume = document.querySelector('#volu');
let dataSize = document.querySelector('#data');
let long = document.querySelector('#long');
let nafta = document.querySelector('#nafta');
let main = document.querySelector('.main');
let base = document.querySelector('.base');

// FUNCTION 4 OPTIONS

function active4(z,a,b,c,d){
    main.innerHTML = `
    <div class="content">
        <div class="title">
                <h1>${z} Conversor</h1>
        </div>
        <div id="uno">
            <input type="number" class="inputs number">
            <br>
            <ul class="first">
                <li id="mostrado1">${a}</li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 dd izq" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </ul>
        </div>
        <div id="dos">    
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 equal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flecha" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        </div>
        <div id="tres">
            <div class="inputs result"></div>
            <ul class="second">
                <li id="mostrado2">${b}<li>                    
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 dd der" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </ul>
        </div>
        <div id="cuatro">
            <ul class="options opizq">
                <li class="li2" id="ops1">${a}</li>
                <li class="li2" id="ops2">${c}</li>
                <li class="li2" id="ops3">${b}</li>
                <li class="li2" id="ops4">${d}</li>
            </ul>
            <ul class="options opder">
                <li class="li2" id="ops5">${b}</li>
                <li class="li2" id="ops6">${c}</li>
                <li class="li2" id="ops7">${a}</li>
                <li class="li2" id="ops8">${d}</li>
            </ul>
        </div>
    </div>
    `;

    // ELEMENTOS OPCIONES

    let optionsUno = document.querySelector('.opizq');
    let optionsDos = document.querySelector('.opder');
    let izq = document.querySelector('.izq');
    let der = document.querySelector('.der');
    let array = [ops1,ops2,ops3,ops4];
    let array2 = [ops5,ops6,ops7,ops8];
    
    // ELEMENTOS A LA VISTA

    let numbersInput = document.querySelector('.number');
    let resultado = document.querySelector('.result');
    let equal = document.querySelector('.equal');
    let flecha = document.querySelector('.flecha');
    let mostrado1 = document.querySelector('#mostrado1');
    let mostrado2 = document.querySelector('#mostrado2');

    izq.addEventListener('click',()=>{
        optionsUno.style.display = 'grid';
    });
    der.addEventListener('click',()=>{
        optionsDos.style.display = 'grid';
    });

    flecha.addEventListener('click',()=>{
        let list = [];
        list.push(mostrado1.textContent);
        list.push(mostrado2.textContent);
        mostrado1.textContent = list[1];
        mostrado2.textContent = list[0];
        numbersInput.value = '';
        resultado.textContent = '';

        // ACA PODRIA METER TODO ESTO DENTRO DE UNA FUNCTION Y AGREGAGRLE ONCLICK ESA FUNCTION

    });

    for (let x of array){
        x.addEventListener('click',()=>{
            optionsUno.style.display = 'none';
            mostrado1.textContent = x.textContent;
            numbersInput.value = '';
            resultado.textContent = '';
        });
    };
    for (let s of array2){
        s.addEventListener('click',()=>{
            optionsDos.style.display = 'none';
            mostrado2.textContent = s.textContent;
            resultado.textContent = '';
        });
    };

    equal.addEventListener('click',()=>{
        if (mostrado1.textContent == 'Kilograms'&&mostrado2.textContent == 'Pounds'){
            let res = (numbersInput.value)*2.20462;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kilograms'&&mostrado2.textContent == 'Grams'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kilograms'&&mostrado2.textContent == 'Tons'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Pounds'&&mostrado2.textContent == 'Kilograms'){
            let res = (numbersInput.value)/2.20462;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Pounds'&&mostrado2.textContent == 'Grams'){
            let res = (numbersInput.value)*454;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Pounds'&&mostrado2.textContent == 'Tons'){
            let res = (numbersInput.value)/2205;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Grams'&&mostrado2.textContent == 'Kilograms'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Grams'&&mostrado2.textContent == 'Pounds'){
            let res = (numbersInput.value)/454;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Grams'&&mostrado2.textContent == 'Tons'){
            let res = (numbersInput.value)/1e+6;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Tons'&&mostrado2.textContent == 'Kilograms'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Tons'&&mostrado2.textContent == 'Pounds'){
            let res = (numbersInput.value)*2205;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Tons'&&mostrado2.textContent == 'Grams'){
            let res = (numbersInput.value)*1e+6;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Seconds'&&mostrado2.textContent == 'Minutes'){
            let res = (numbersInput.value)/60;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Seconds'&&mostrado2.textContent == 'Hours'){
            let res = (numbersInput.value)/3600;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Seconds'&&mostrado2.textContent == 'Days'){
            let res = (numbersInput.value)/86400;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Minutes'&&mostrado2.textContent == 'Seconds'){
            let res = (numbersInput.value)*60;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Minutes'&&mostrado2.textContent == 'Hours'){
            let res = (numbersInput.value)/60;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Minutes'&&mostrado2.textContent == 'Days'){
            let res = (numbersInput.value)/1440;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Hours'&&mostrado2.textContent == 'Minutes'){
            let res = (numbersInput.value)*60;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Hours'&&mostrado2.textContent == 'Seconds'){
            let res = (numbersInput.value)*3600;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Hours'&&mostrado2.textContent == 'Days'){
            let res = (numbersInput.value)/24;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Days'&&mostrado2.textContent == 'Hours'){
            let res = (numbersInput.value)*24;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Days'&&mostrado2.textContent == 'Minutes'){
            let res = (numbersInput.value)*1440;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Days'&&mostrado2.textContent == 'Seconds'){
            let res = (numbersInput.value)*86400;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'MegaByte'&&mostrado2.textContent == 'GigaByte'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'MegaByte'&&mostrado2.textContent == 'KiloByte'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'MegaByte'&&mostrado2.textContent == 'TeraByte'){
            let res = (numbersInput.value)/1e+6;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'GigaByte'&&mostrado2.textContent == 'MegaByte'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'GigaByte'&&mostrado2.textContent == 'KiloByte'){
            let res = (numbersInput.value)*1e+6;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'GigaByte'&&mostrado2.textContent == 'TeraByte'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'KiloByte'&&mostrado2.textContent == 'GigaByte'){
            let res = (numbersInput.value)/1e+6;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'KiloByte'&&mostrado2.textContent == 'TeraByte'){
            let res = (numbersInput.value)/1e+9;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'KiloByte'&&mostrado2.textContent == 'MegaByte'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'TeraByte'&&mostrado2.textContent == 'KiloByte'){
            let res = (numbersInput.value)*1e+9;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'TeraByte'&&mostrado2.textContent == 'MegaByte'){
            let res = (numbersInput.value)*1e+6;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'TeraByte'&&mostrado2.textContent == 'GigaByte'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Meter'&&mostrado2.textContent == 'KiloMeter'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Meter'&&mostrado2.textContent == 'CentiMeter'){
            let res = (numbersInput.value)*100;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Meter'&&mostrado2.textContent == 'Mile'){
            let res = (numbersInput.value)/1609;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'KiloMeter'&&mostrado2.textContent == 'Meter'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'KiloMeter'&&mostrado2.textContent == 'CentiMeter'){
            let res = (numbersInput.value)*100000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'KiloMeter'&&mostrado2.textContent == 'Mile'){
            let res = (numbersInput.value)/1.609;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'CentiMeter'&&mostrado2.textContent == 'KiloMeter'){
            let res = (numbersInput.value)/100000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'CentiMeter'&&mostrado2.textContent == 'Meter'){
            let res = (numbersInput.value)/100;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'CentiMeter'&&mostrado2.textContent == 'Mile'){
            let res = (numbersInput.value)/160934;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Mile'&&mostrado2.textContent == 'KiloMeter'){
            let res = (numbersInput.value)*1.609;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Mile'&&mostrado2.textContent == 'Meter'){
            let res = (numbersInput.value)*1609;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Mile'&&mostrado2.textContent == 'CentiMeter'){
            let res = (numbersInput.value)*160934;
            resultado.textContent = res;
        } else if (mostrado1.textContent == mostrado2.textContent){
            resultado.textContent = numbersInput.value;
        }
    });
};

// FUNCTION 3 OPTIONS

function active3(z,a,b,c){
    main.innerHTML = `
    <div class="content">
        <div class="title">
                <h1>${z} Conversor</h1>
        </div>
        <div id="uno">
            <input type="number" class="inputs number">
            <br>
            <ul class="first">
                <li id="mostrado1">${a}</li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 dd izq" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </ul>
        </div>
        <div id="dos">    
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 equal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flecha" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        </div>
        <div id="tres">
            <div class="inputs result"></div>
            <ul class="second">
                <li id="mostrado2">${b}<li>                    
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 dd der" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </ul>
        </div>
        <div id="cuatro">
            <ul class="options opizq">
                <li class="li2" id="ops1">${a}</li>
                <li class="li2" id="ops2">${c}</li>
                <li class="li2" id="ops3">${b}</li>
            </ul>
            <ul class="options opder">
                <li class="li2" id="ops5">${b}</li>
                <li class="li2" id="ops6">${c}</li>
                <li class="li2" id="ops7">${a}</li>
            </ul>
        </div>
    </div>
    `;

    // ELEMENTOS OPCIONES

    let optionsUno = document.querySelector('.opizq');
    let optionsDos = document.querySelector('.opder');
    let izq = document.querySelector('.izq');
    let der = document.querySelector('.der');
    let array = [ops1,ops2,ops3];
    let array2 = [ops5,ops6,ops7];
    
    // ELEMENTOS A LA VISTA

    let numbersInput = document.querySelector('.number');
    let resultado = document.querySelector('.result');
    let equal = document.querySelector('.equal');
    let flecha = document.querySelector('.flecha');
    let mostrado1 = document.querySelector('#mostrado1');
    let mostrado2 = document.querySelector('#mostrado2');

    izq.addEventListener('click',()=>{
        optionsUno.style.display = 'grid';
    });
    der.addEventListener('click',()=>{
        optionsDos.style.display = 'grid';
    });

    flecha.addEventListener('click',()=>{
        let list = [];
        list.push(mostrado1.textContent);
        list.push(mostrado2.textContent);
        mostrado1.textContent = list[1];
        mostrado2.textContent = list[0];
        numbersInput.value = '';
        resultado.textContent = '';
    });

    for (let x of array){
        x.addEventListener('click',()=>{
            optionsUno.style.display = 'none';
            mostrado1.textContent = x.textContent;
            numbersInput.value = '';
            resultado.textContent = '';
        });
    };
    for (let s of array2){
        s.addEventListener('click',()=>{
            optionsDos.style.display = 'none';
            mostrado2.textContent = s.textContent;
            resultado.textContent = '';
        });
    };

    equal.addEventListener('click',()=>{
        if (mostrado1.textContent == 'Celcius'&&mostrado2.textContent == 'Fahrenheit'){
            let res = ((numbersInput.value)*(9/5)) + 32;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Celcius'&&mostrado2.textContent == 'Kelvin'){
            let res = (numbersInput.value)+273.15;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Fahrenheit'&&mostrado2.textContent == 'Kelvin'){
            let res = (((numbersInput.value)-32)*(5/9)) + 273.15;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Fahrenheit'&&mostrado2.textContent == 'Celcius'){
            let res = ((numbersInput.value)-32)*(5/9);
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kelvin'&&mostrado2.textContent == 'Fahrenheit'){
            let res = (((numbersInput.value)-273.15)*(9/5) + 32);
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kelvin'&&mostrado2.textContent == 'Celcius'){
            let res = (numbersInput.value)-273.15;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kilometer per hour'&&mostrado2.textContent == 'Mile per hour'){
            let res = (numbersInput.value)/1.609;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kilometer per hour'&&mostrado2.textContent == 'Knots'){
            let res = (numbersInput.value)/1.852;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Knots'&&mostrado2.textContent == 'Kilometer per hour'){
            let res = (numbersInput.value)*1.852;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Knots'&&mostrado2.textContent == 'Mile per hour'){
            let res = (numbersInput.value)*1.151;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Mile per hour'&&mostrado2.textContent == 'Kilometer per hour'){
            let res = (numbersInput.value)*1.609;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Mile per hour'&&mostrado2.textContent == 'Knots'){
            let res = (numbersInput.value)/1.151;
            resultado.textContent = res;
        } else if (mostrado1.textContent == mostrado2.textContent){
            resultado.textContent = numbersInput.value;
        }
    });
};

// FUNCTION 2 OPTIONS

function active2(z,a,b){
    main.innerHTML = `
    <div class="content">
        <div class="title">
                <h1>${z} Conversor</h1>
        </div>
        <div id="uno">
            <input type="number" class="inputs number">
            <br>
            <ul class="first">
                <li id="mostrado1">${a}</li>
            </ul>
        </div>
        <div id="dos">    
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 equal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flecha" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        </div>
        <div id="tres">
            <div class="inputs result"></div>
            <ul class="second">
                <li id="mostrado2">${b}<li>
            </ul>
        </div>
        <div id="cuatro">
            <ul class="options opizq"></ul>
            <ul class="options opder"></ul>
        </div>
    </div>
    `;
    
    // ELEMENTOS A LA VISTA
    
    let numbersInput = document.querySelector('.number');
    let resultado = document.querySelector('.result');
    let equal = document.querySelector('.equal');
    let flecha = document.querySelector('.flecha');
    let mostrado1 = document.querySelector('#mostrado1');
    let mostrado2 = document.querySelector('#mostrado2');

    flecha.addEventListener('click',()=>{
        let list = [];
        list.push(mostrado1.textContent);
        list.push(mostrado2.textContent);
        mostrado1.textContent = list[1];
        mostrado2.textContent = list[0];
        numbersInput.value = '';
        resultado.textContent = '';
    });

    equal.addEventListener('click',()=>{
        if (mostrado1.textContent == 'Liter'&&mostrado2.textContent == 'Mililiter'){
            let res = (numbersInput.value)*1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Mililiter'&&mostrado2.textContent == 'Liter'){
            let res = (numbersInput.value)/1000;
            resultado.textContent = res;
        } else if (mostrado1.textContent == mostrado2.textContent){
            resultado.textContent = numbersInput.value;
        }
    });
};

// FUNCTION FOR GASOLINE

function active5(z,a,b,c,d){
    main.innerHTML = `
    <div class="content">
        <div class="title">
                <h1>${z} Calculator</h1>
        </div>
        <div id="uno">
            <input type="number" class="inputs number">
            <br>
            <ul class="first">
                <li id="mostrado1">${a} to Travel</li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 dd izq" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </ul>
        </div>
        <div id="dos">    
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 equal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
        </div>
        <div id="tres">
            <div class="inputs result"></div>
            <ul class="second">
                <li id="mostrado2">${c} you Need<li>                    
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-6 dd der" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </ul>
        </div>
        <div id="cuatro">
            <ul class="options opizq">
                <li class="li2" id="ops1">${a} to Travel</li>
                <li class="li2" id="ops2">${b} to Travel</li>
            </ul>
            <ul class="options opder">
                <li class="li2" id="ops5">${c} you Need</li>
                <li class="li2" id="ops6">${d} you Need</li>
            </ul>
        </div>
    </div>
    `;

    // ELEMENTOS OPCIONES

    let optionsUno = document.querySelector('.opizq');
    let optionsDos = document.querySelector('.opder');
    let izq = document.querySelector('.izq');
    let der = document.querySelector('.der');
    let array = [ops1,ops2];
    let array2 = [ops5,ops6];
    
    // ELEMENTOS A LA VISTA

    let numbersInput = document.querySelector('.number');
    let resultado = document.querySelector('.result');
    let equal = document.querySelector('.equal');    
    let mostrado1 = document.querySelector('#mostrado1');
    let mostrado2 = document.querySelector('#mostrado2');

    izq.addEventListener('click',()=>{
        optionsUno.style.display = 'grid';
    });
    der.addEventListener('click',()=>{
        optionsDos.style.display = 'grid';
    });

    for (let x of array){
        x.addEventListener('click',()=>{
            optionsUno.style.display = 'none';
            mostrado1.textContent = x.textContent;
            numbersInput.value = '';
            resultado.textContent = '';
        });
    };
    for (let s of array2){
        s.addEventListener('click',()=>{
            optionsDos.style.display = 'none';
            mostrado2.textContent = s.textContent;
            resultado.textContent = '';
        });
    };

    equal.addEventListener('click',()=>{
        if (mostrado1.textContent == 'Kilometers to Travel'&&mostrado2.textContent == 'Liters you Need'){
            let res = (numbersInput.value)/12;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Kilometers to Travel'&&mostrado2.textContent == 'Gallons you Need'){
            let res = ((numbersInput.value)/12)/3.785;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Miles to Travel'&&mostrado2.textContent == 'Liters you Need'){
            let res = ((numbersInput.value)*1.609)/12;
            resultado.textContent = res;
        } else if (mostrado1.textContent == 'Miles to Travel'&&mostrado2.textContent == 'Gallons you Need'){
            let res = (((numbersInput.value)*1.609)/12)/3.785;
            resultado.textContent = res;
        } else if (mostrado1.textContent == mostrado2.textContent){
            resultado.textContent = numbersInput.value;
        }
    });
};

// let btnColor = document.querySelector('#btnColor');

// btnColor.addEventListener('click',()=>{
//     document.body.style.backgroundColor = '#231942';
//     main.style.backgroundColor = '#9F86C0'
// });