/**************************************************************************************************/
// Defining Isobaric Process

function Isobaric_process(id, input, output){
  this.id = id;
  this.input = input; this.output = output;
  input.to = this; output.from = this;
  this.trajectory = { p: [], v: [], T: [] };
  this.trajectory_computed = false;
}

/**************************************************************************************************/

Isobaric_process.prototype.assignKnowns = function(){
  if(this.input.known.p == false && this.output.known.p == true){
    this.input.known.p = true;
    this.input.determined_by.p = 'output';
  }

  if(this.input.known.p == true && this.output.known.p == false){
    this.output.known.p = true;
    this.output.determined_by.p = 'input';
  }
}

/**************************************************************************************************/

Isobaric_process.prototype.compute = function(){

  /* Input is decided by output */
  if(this.input.determined_by.p == 'output'){
    assign_values_isobaric_process(this.output, this.input);
  }
  /* Input is decided by output */

  /* Output is decided by input */
  if(this.output.determined_by.p == 'input'){
    assign_values_isobaric_process(this.input, this.output);
  }
  /* Output is decided by input */

  if(this.input.getComputedCount() == 3 && this.output.getComputedCount() == 3 && this.trajectory_computed == false){
    this.trajectory.p = d3.range(num_points_graph).map(d => { return this.input.p })

    var v_scale = d3.scaleLinear().domain([0, num_points_graph-1]).range([this.input.v, this.output.v]);
    this.trajectory.v = d3.range(num_points_graph).map(d => { return v_scale(d) });

    this.trajectory.T = numeric.div(numeric.mul(this.trajectory.p, this.trajectory.v), R_air/1000);
    this.trajectory_computed = true;
  }
}

/**************************************************************************************************/

function assign_values_isobaric_process(from, to){
  if(to.computed.p == false && from.computed.p == true){
    to.p = from.p;
    to.computed.p = true;
  }
}

/**************************************************************************************************/
