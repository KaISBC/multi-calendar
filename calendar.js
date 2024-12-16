document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    document.getElementById("current-date").innerText = currentDate.toLocaleDateString();

    // Funzione per convertire la data nei diversi calendari
    const calendars = [
        { name: "Gregorio (Standard)", convert: () => currentDate.toLocaleDateString() },
        { name: "Islamico", convert: convertToIslamic },
        { name: "Thailandese", convert: convertToThai },
        { name: "Ebraico", convert: convertToHebrew },
        // Aggiungi altri calendari qui
    ];

    const tableBody = document.getElementById("calendar-table");

    calendars.forEach(calendar => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = calendar.name;
        const dateCell = document.createElement("td");
        dateCell.textContent = calendar.convert();
        row.appendChild(nameCell);
        row.appendChild(dateCell);
        tableBody.appendChild(row);
    });

    // Conversioni calendario (mock per semplicità)
    function convertToIslamic() {
        // Simula una conversione in calendario islamico
        return "1446-05-15";
    }

    function convertToThai() {
        return `${currentDate.getFullYear() + 543}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    }

    function convertToHebrew() {
        return "5784-Tevet-5"; // Esempio fisso
    }
});
