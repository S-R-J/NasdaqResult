window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var intPass = parseInt(document.getElementById("pass").innerText);
  var intFail = parseInt(document.getElementById("fail").innerText);
  var table = document.getElementById("results");
  for (var i = 1; i < table.rows.length; i++) { 
            var columnValue = table.rows[i].cells[5].innerText;
            var buttonElement = table.rows[i].cells[2].querySelector('.myButton2');
            if (columnValue === 'PASS') {
                buttonElement.classList.add('btnCol1');
            }
			else {
				buttonElement.classList.add('btnCol2');
 
			}
		}
  canvas.width = 25;
  canvas.height = 25;
  new Chart(canvas, {
    type: 'pie',
    data: {
          labels: ['Passed','Failed'],
      datasets: [{
        data: [intPass,intFail],
        borderWidth: 1,
        backgroundColor: [
          'rgb(0,128,0)',
          'rgb(255,32,32)',
        ],
		hoverBackgroundColor: [
			'rgb(25,168,50)',
			'rgb(222,2,2)',
		],
        hoverOffset: 4
      }]
    }
  });
};