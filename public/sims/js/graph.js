var graph_var = {};
graph_var.x = 'v';
graph_var.y = 'p';

function createGraph(){
  var state_points = {
    x: [],
    y: [],
    mode: 'markers+text', name: 'states',
    text: ['State 1', 'State 2', 'State 3', 'State 4'],
    textposition: 'top right',
    textfont: { family: 'serif, sans-serif' },
  }
  var data = [state_points];

  var processes_data_arry = processes_array.map(process => { return { x: [], y: [], mode: 'lines' } })
  processes_data_arry.forEach(process => { data.push(process) });

  var layout = {
    xaxis: { title: graph_var.x+' →' },
    yaxis: { title: graph_var.y+' →' },
    margin: { t: 40, b: 40, l: 40, r: 40 },
    legend: { orientation: 'h' },
    showlegend: false,
  };
  Plotly.newPlot('graph_panel', data, layout, { staticPlot: true });
}

/**************************************************************************/

function updateGraph(){
  var data = document.getElementById('graph_panel').data;

  data[0].x = states_array.map(state => { return state[graph_var.x] });
  data[0].y = states_array.map(state => { return state[graph_var.y] });

  processes_array.forEach((process,i) => {
    data[i+1].x = process.trajectory[graph_var.x];
    data[i+1].y = process.trajectory[graph_var.y];
  })

  var layout = document.getElementById('graph_panel').layout;

  var x_extent = d3.extent(data[0].x);
  if( x_extent[0] > params[graph_var.x].graph_min ){ x_extent[0] = params[graph_var.x].graph_min };
  if( x_extent[1] < params[graph_var.x].graph_max ){ x_extent[1] = params[graph_var.x].graph_max };
  if( x_extent[0] == undefined ){ x_extent[0] = params[graph_var.x].graph_min; x_extent[1] = params[graph_var.x].graph_max; }
  layout.xaxis.range = x_extent;

  var y_extent = d3.extent(data[0].y);
  if( y_extent[0] > params[graph_var.y].graph_min ){ y_extent[0] = params[graph_var.y].graph_min; };
  if( y_extent[1] < params[graph_var.y].graph_max ){ y_extent[1] = params[graph_var.y].graph_max; };
  if( y_extent[0] == undefined ){ y_extent[0] = params[graph_var.y].graph_min; y_extent[1] = params[graph_var.y].graph_max; }
  layout.yaxis.range = y_extent;

  Plotly.redraw('graph_panel');
}
