let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Science', 'Arts', 'Commerce'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B'];

var b = localStorage.getItem("science");
var c = localStorage.getItem("bio");
var d = localStorage.getItem("commerce");


// alert("the value received is"+b);
// alert("the value received is"+c);
// alert("the value received is"+d);



let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [b,c,d],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})