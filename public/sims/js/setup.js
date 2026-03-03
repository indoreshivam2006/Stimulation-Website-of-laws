/*******************************************************************************************/
// Setup

var num_states = 4;

function setup(){
  for(var i = 0; i < num_states; i++){ states_array.push(new State('State '+(i+1), ambient.p, ambient.v, ambient.T)); }
  processes_array.push( new Isobaric_process('Evaporator', states_array[0], states_array[1]) );
  processes_array.push( new Adiabatic_process('Compressor', states_array[1], states_array[2]) );
  processes_array.push( new Isobaric_process('Condenser', states_array[2], states_array[3]) );
  processes_array.push( new Adiabatic_process('Throttle', states_array[3], states_array[0]) );
  createSchematic();
  createHTMLElements();
  createEvents();
  createGraph();
  // $('[data-toggle="tooltip"]').tooltip();
  // $('[data-toggle="tooltip"]').tooltip('show');
  // $('[data-toggle="popover"]').popover()
  $('[data-toggle="popover"]').popover('show');
  d3.select('#info_icon').on('click', function(){
    swal({
      type: 'info',
      text: 'Get in touch: harshitagrawal.iitr@gmail.com',
    });
  })
}

/*******************************************************************************************/
// Create HTML Elements

function createHTMLElements(){
  states_array.forEach((state,i) => {
    var card = d3.select('#controls_panel').append('div').attrs({ class: 'col-md-6 card' });
    card.append('div').attrs({ class: 'card-header' }).html('State ' + (i+1));

    var card_body = card.append('div').attrs({ class: 'card-body text-justify' });

    var obj = {};
    [{ param: 'p', unit: 'kPa' }, { param: 'v', unit: 'm^3/kg' }, { param: 'T', unit: 'K' }].map(d => {
      obj[d.param] = {};
      obj[d.param].div = card_body.append('div').attrs({ class: 'pb-2' });
      obj[d.param].checkbox = obj[d.param].div.append('input').attrs({ type: 'checkbox', class: 'checkbox', param: d.param }).data([state]);
      obj[d.param].div.append('span').attrs({ class: 'px-2' }).html('(' +d.param+ ':)');
      obj[d.param].slider = obj[d.param].div.append('input').attrs({ type: 'range', class: 'slider', param: d.param, min: params[d.param].min, max: params[d.param].max, step: params[d.param].step }).data([state]);
      obj[d.param].input = obj[d.param].div.append('input').attrs({ type: 'number', class: 'input mx-2', param: d.param }).data([state]);
      obj[d.param].div.append('span').html('(' +d.unit+ ')');
    });

    state.dom = obj;
  })
}

/*******************************************************************************************/
// Create Events

function createEvents(){
  states_array.forEach(state => {
    Object.keys(params).forEach(param => {

      /* Checkbox events */
      state.dom[param].checkbox.on('input', function(data){
        state.checked[param] = this.checked;
        if(this.checked == true){ state[param] = ambient[param]; }
        assignKnowns(); compute();
      })
      /* Checkbox events */

      /* Slider events */
      state.dom[param].slider.on('input', function(data){
        state[param] = parseFloat(this.value);
        compute();
      })
      /* Slider events */

      /* Input events */
      state.dom[param].input.on('input', function(data){
        state[param] = parseFloat(this.value);
        compute();
      })
      /* Input events */

    })
  })

  d3.select('#y_axis_menu').on('change', function(){
    graph_var.y = this.value;
    createGraph();
    updateGraph();
  })

  d3.select('#x_axis_menu').on('change', function(){
    graph_var.x = this.value;
    createGraph();
    updateGraph();
  })

}
