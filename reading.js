const jsonURL = './data.json';
fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Az HTML elem kiválasztása, amelybe be szeretnénk tenni a score értékét
        const scoreElement = document.getElementById('persPoint');
        const scoreElement1=document.getElementById('memPoint');
        const scoreElement2=document.getElementById('verbPoint');
        const scoreElement3=document.getElementById('visPoint');

        // Az első elem (index 0) score értékének lekérése
        const scoreValue = data[0].score;
        const scoreValue1=data[1].score;
        const scoreValue2=data[2].score;
        const scoreValue3=data[3].score;

        // A score értékének megjelenítése az HTML elemen
        scoreElement.textContent = ` ${scoreValue} /100`;
        scoreElement1.textContent = ` ${scoreValue1} /100`;
        scoreElement2.textContent = ` ${scoreValue2} /100`;
        scoreElement3.textContent = ` ${scoreValue3} /100`;
    });
