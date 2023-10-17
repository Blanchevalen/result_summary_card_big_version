const jsonURL = './data.json';
fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Az HTML elem kiválasztása, amelybe be szeretnénk tenni a score értékét
        const scoreElement = document.getElementById('persPoint');

        // Az első elem (index 0) score értékének lekérése
        const scoreValue = data[0].score;

        // A score értékének megjelenítése az HTML elemen
        scoreElement.textContent = ` ${scoreValue} /100`;
    });
