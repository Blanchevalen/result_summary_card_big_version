const jsonURl='./data.json';
fetch (jsonURl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        // JSON fájl betöltése és feldolgozása (például: data változóba)
// ...

// Az HTML elem kiválasztása, amelybe be szeretnénk tenni a score értékét
//const scoreElement = document.getElementById('score');
const scoreElement=document.getElementById('persPoint')

// Az első elem (index 0) score értékének lekérése
//const scoreValue = data[0].score;
const scoreValue=data[0].score;

// A score értékének megjelenítése az HTML elemen
//scoreElement.textContent = `Score: `;
scoreElement.textcontent='${scoreValue}';

    })