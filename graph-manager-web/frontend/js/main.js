// This file contains the JavaScript code for the frontend application, handling user interactions and making API calls to the backend.

document.addEventListener('DOMContentLoaded', function() {
    const notesContainer = document.getElementById('notes-container');
    const tableContainer = document.getElementById('table-container');
    const flowchartContainer = document.getElementById('flowchart-container');

    // Function to fetch notes from the backend
    function fetchNotes() {
        fetch('/api/notes')
            .then(response => response.json())
            .then(data => {
                notesContainer.innerHTML = '';
                data.forEach(note => {
                    const noteElement = document.createElement('div');
                    noteElement.textContent = note.content;
                    notesContainer.appendChild(noteElement);
                });
            })
            .catch(error => console.error('Error fetching notes:', error));
    }

    // Function to fetch tables from the backend
    function fetchTables() {
        fetch('/api/tables')
            .then(response => response.json())
            .then(data => {
                tableContainer.innerHTML = '';
                data.forEach(table => {
                    const tableElement = document.createElement('div');
                    tableElement.textContent = JSON.stringify(table);
                    tableContainer.appendChild(tableElement);
                });
            })
            .catch(error => console.error('Error fetching tables:', error));
    }

    // Function to fetch flowcharts from the backend
    function fetchFlowcharts() {
        fetch('/api/flowcharts')
            .then(response => response.json())
            .then(data => {
                flowchartContainer.innerHTML = '';
                data.forEach(flowchart => {
                    const flowchartElement = document.createElement('div');
                    flowchartElement.textContent = flowchart.title;
                    flowchartContainer.appendChild(flowchartElement);
                });
            })
            .catch(error => console.error('Error fetching flowcharts:', error));
    }

    // Initial fetch calls
    fetchNotes();
    fetchTables();
    fetchFlowcharts();
});