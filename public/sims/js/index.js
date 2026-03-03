/*******************************************************************************************/
// Document Ready

var states_array = [], processes_array = [], trajectory = [];
var params = {
  p: {min: 0, max: 300, step: 1, name: 'Pressure', variable: 'pressure'},
  v: {min: 0, max: 4, step: 0.01, name: 'Specific Volume', variable: 'volume'},
  T: {min: 0, max: 500, step: 1, name: 'Temperaure', variable: 'temperature'}
};

['p', 'v', 'T'].forEach(param => {
  params[param].graph_min = params[param].min - 10*params[param].step;
  params[param].graph_max = params[param].max + 10*params[param].step;
})

var R_air = 287, γ_air = 1.4;
var ambient = { p: 100, T: 300 };
ambient.v = getVolume(ambient.p, ambient.T);

var num_points_graph = 100;

/*******************************************************************************************/
// Document Ready

$(document).ready(function(){
  setup();
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  assignKnowns();
  compute();
})
