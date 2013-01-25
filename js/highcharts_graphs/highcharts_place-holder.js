$(function () {
  window.areas = new Highcharts.Chart({
              
      chart: {
          renderTo: 'area-charts',
          polar: true,
          type: 'line'
      },
      
      title: {text: ''},
      
      pane: {
        size: '80%'
      },
      
      xAxis: {
          categories: ['Ambition', 'Skills', 'Influence', 'Productivity', 
                  'Quality', 'Com.'],
          tickmarkPlacement: 'on',
          lineWidth: 0
      },
          
      yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0
      },
      
      tooltip: {
        shared: true,
          valueSuffix: '.bits'
      },
      
      legend: {},
      
      series: [{
          showInLegend: false,
          name: '',
          data: [43000, 19000, 60000, 35000, 17000, 10000],
          pointPlacement: 'on'
      }]
  });

  window.activity = new Highcharts.Chart({

        chart: {
            renderTo: 'activity-charts',
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'J',
                'F',
                'M',
                'A',
                'M',
                'J',
                'J',
                'A',
                'S',
                'O',
                'N',
                'D'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {},

        tooltip: {
            formatter: function() {
                return ''+
                    this.x +': '+ this.y +' mm';
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
            series: [{
              showInLegend: false,
              name: '',
              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });


});