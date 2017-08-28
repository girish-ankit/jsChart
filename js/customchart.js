window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer",
		{

			title:{
				text: "Jawzone Statistics",
				fontSize: 30
			},
                        animationEnabled: true,
			axisX:{

				gridColor: "Silver",
				tickColor: "silver",
				//valueFormatString: "DD/MMM/YYYY"
                                valueFormatString: "YYYY"

			},                        
                        toolTip:{
                          shared:true
                        },
			theme: "theme2",
			axisY: {
				gridColor: "Silver",
				tickColor: "silver"
			},
			legend:{
				verticalAlign: "center",
				horizontalAlign: "right"
			},
			data: [
				{
		                        "type":"line",
					"showInLegend":true,
					"name":"Total Bites",
					"color":"#F08080",
					"lineThickness":2,
					"dataPoints": [
				{ "x": new Date(2010,0,1), "y": 10 },
				{ "x": new Date(2011,0,1),"y": 20 },
				{ "x": new Date(2012,0,1), "y": 30 },
				{ "x": new Date(2013,0,1), "y": 40 },
				{ "x": new Date(2014,0,1), "y": 30 },
				{ "x": new Date(2015,0,1), "y": 50},
				{ "x": new Date(2016,0,1), "y": 60 }
				
					]
                                },
				{
		                        "type":"line",
					"showInLegend":true,
					"name":"Total Bites",
					"color":"#20B2AA",
					"lineThickness":2,
					"dataPoints": [
						
				{ "x": new Date(2010,0,1), "y": 0 },
				{ "x": new Date(2011,0,1),"y": 10 },
				{ "x": new Date(2012,0,1), "y": "40" },
				{ "x": new Date(2013,0,1), "y": "40" },
				{ "x": new Date(2014,0,1), "y": "30" },
				{ "x": new Date(2015,0,1), "y": 50},
				{ "x": new Date(2016,0,1), "y": 60 }
					]
				}
                           ],
          legend:{
            cursor:"pointer",
            itemclick:function(e){
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              	e.dataSeries.visible = false;
              }
              else{
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
		});

chart.render();
}

