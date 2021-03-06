google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Signed In', 'Not Signed In'],
        ['United State',15923,57732],
        ['France', 4592	,12306],
        ['Canada', 2153,	10583],
        ['United Kingdom', 1754,	9712],
        ['Germany',	1423,	4798],
        ['Australia',	843,	3455],
        ['South Korea',	1427,	2732],
        ['Italy',	372	,2789],
        ['Japan',	418,	2524],
        ['Spain',	690,	2132],
        ['China',	926	,1684 ],
        ['Brazil',	853,	1616 ],
        ['Switzerland',	569	,1490 ],
        ['Belgium',	303,	1713] 
      ])
      
      var options = {
        chartArea: {width: '60%'},
        height:500,
        isStacked: true,
        hAxis: {
          title: 'Total des parties',
          minValue: 0,
          ticks: [0, 16000, 32000, 48000, 64000, 80000]
        },
        vAxis: {
          title: 'Pays'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('graph_account'));
      chart.draw(data, options);
    }