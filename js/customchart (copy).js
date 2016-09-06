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
				type: "line",
				showInLegend: true,
				lineThickness: 2,
				name: "Followers",
				//markerType: "square",
				color: "#F08080",
				dataPoints: [
				{ x: new Date(2010,0,1), y: 10 },
				{ x: new Date(2011,0,1), y: 20 },
				{ x: new Date(2012,0,1), y: 30 },
				{ x: new Date(2013,0,1), y: 40 },
				{ x: new Date(2014,0,1), y: 30 },
				{ x: new Date(2015,0,1), y: 50},
				{ x: new Date(2016,0,1), y: 60 },
				{ x: new Date(2017,0,1), y: 40 },
				{ x: new Date(2018,0,1), y: 50},
				{ x: new Date(2019,0,1), y: 70},
				{ x: new Date(2020,0,1), y: 80}
				]
			},
			{        
				type: "line",
				showInLegend: true,
				name: "Total Bites",
				color: "#20B2AA",
				lineThickness: 2,

				dataPoints: [
				{ x: new Date(2010,0,1), y: 0 },
				{ x: new Date(2011,0,1), y: 50},
				{ x: new Date(2011,0,1), y: 10},
				{ x: new Date(2012,0,1), y: 75},
                                { x: new Date(2013,0,1), y: 15 }
				
				]
			},
                        {        
				type: "line",
				showInLegend: true,
				name: "Total Jaws/Posts",
				color: "#0000FF",
				lineThickness: 2,

				dataPoints: [
				{ x: new Date(2010,0,1), y: 12 },
				{ x: new Date(2011,0,1), y: 42 },
				{ x: new Date(2011,0,1), y: 72 },
				{ x: new Date(2013,0,1), y: 52 },
				{ x: new Date(2014,0,1), y: 32 },
				{ x: new Date(2020,0,1), y: 12}
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

