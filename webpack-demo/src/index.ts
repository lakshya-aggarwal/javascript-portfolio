import './style.css';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_regression from "@amcharts/amcharts4/plugins/regression";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Enable chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

// Set up data source
chart.dataSource.disableCache = true;
chart.dataSource.url = "sample_data_serial.json";
chart.dataSource.parser = new am4core.JSONParser();
chart.dataSource.parser.options.emptyAs = 0;


// Create axes
let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
valueAxisX.title.text = 'X Axis - Malic acid';

// Create value axis
let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
valueAxisY.title.text = 'Y Axis - Color intensity';

// Create series
let lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.valueY = "Color intensity";
lineSeries.dataFields.valueX = "Malic acid";
lineSeries.strokeOpacity = 0;


// Add a bullet
let bullet = lineSeries.bullets.push(new am4charts.Bullet());
bullet.tooltipText = "Color Intesity: {valueY}\n[bold font-size: 17px]Malic Acid: {valueX}[/]";

let hoverState = bullet.states.create("hover");
hoverState.properties.scale = 1.7;

// Add a triangle to act as am arrow
let arrow = bullet.createChild(am4core.Triangle);
arrow.horizontalCenter = "middle";
arrow.verticalCenter = "middle";
arrow.strokeWidth = 0;
arrow.fill = chart.colors.getIndex(12);
arrow.direction = "top";
arrow.width = 12;
arrow.height = 12;

// Add a linear regression trend line
let regseries = chart.series.push(new am4charts.LineSeries());
regseries.dataFields.valueY = "Color intensity";
regseries.dataFields.valueX = "Malic acid";
regseries.strokeWidth = 2;
regseries.name = "Linear Regression";
regseries.stroke = am4core.color("#ff0000");

let reg = regseries.plugins.push(new am4plugins_regression.Regression());
reg.simplify = true; // While having no effect on visual appearance of the trend line, using such simplification might give a serious performance boost on data-heavy charts
reg.reorder = true;  // On scatter charts - where you have value axes on both X and Y - data points can come in any order. This might produce an odd-looking trend line. To fix that, you can use Regression's reorder setting

var label = chart.tooltipContainer.createChild(am4core.Label);
label.x = am4core.percent(100);
label.marginRight = 100;
label.y = 60;
label.align = "right"
label.toFront();

reg.events.on("processed", function(ev) {
  label.text = "[bold]Equation:[/] " + ev.target.result.string + "\n[bold]R² :[/] " + ev.target.result.r2;
});

//scrollbars
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();
