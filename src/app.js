// Get the chart canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Sample data for the chart
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: 'Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

// Initialize the chart
new Chart(ctx, {
  type: 'bar', // You can change this to 'line', 'pie', etc.
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Set the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('A pretty popup.<br> Easily customizable.')
  .openPopup();
