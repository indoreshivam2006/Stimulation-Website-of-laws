/**************************************************************************************************/
// Defining Adiabatic Process

function Adiabatic_process(id, input, output){
  this.id = id;
  this.input = input; this.output = output;
  input.to = this; output.from = this;
  this.trajectory = { p: [], v: [], T: [] };
  this.trajectory_computed = false;
}

/**************************************************************************************************/

Adiabatic_process.prototype.assignKnowns = function(){
  if((this.input.getKnownCount() == 2 || this.input.getKnownCount() == 3) && this.output.getKnownCount() == 1){
    this.output.params.forEach(param => {
      if(this.output.known[param] == false){ this.output.known[param] = true; this.output.determined_by[param] = 'input'; }
    });
  }

  if((this.output.getKnownCount() == 2 || this.output.getKnownCount() == 3) && this.input.getKnownCount() == 1){
    this.input.params.forEach(param => {
      if(this.input.known[param] == false){ this.input.known[param] = true; this.input.determined_by[param] = 'output'; }
    });
  }
}

/**************************************************************************************************/

Adiabatic_process.prototype.compute = function(){

  if(this.input.getComputedCount() == 3){
    this.assign_values_adiabatic_process('input', 'output');
  }

  else if(this.output.getComputedCount() == 3){
    this.assign_values_adiabatic_process('output', 'input');
  }

  if(this.input.getComputedCount() == 3 && this.output.getComputedCount() == 3 && this.trajectory_computed == false){
    var constant = this.input.p*Math.pow(this.input.v, γ_air);

    var p_scale = d3.scaleLinear().domain([0, num_points_graph-1]).range([this.input.p, this.output.p]);
    this.trajectory.p = d3.range(num_points_graph).map(d => { return p_scale(d) });

    this.trajectory.v = numeric.pow(numeric.div(constant, this.trajectory.p), 1/γ_air);
    // var v_scale = d3.scaleLinear().domain([0, num_points_graph-1]).range([this.input.v, this.output.v]);
    // this.trajectory.v = d3.range(num_points_graph).map(d => { return v_scale(d) });

    this.trajectory.T = numeric.div(numeric.mul(this.trajectory.p, this.trajectory.v), R_air/1000);
    this.trajectory_computed = true;
  }
}

/**************************************************************************************************/

Adiabatic_process.prototype.assign_values_adiabatic_process = function(from, to){

  /* Finding p */
  if(this[to].determined_by.p == from && this[to].computed.p == false){
    if(this[to].computed.v == true){
      this[to].p = get_p_from_pv_relation(this[from].p, this[from].v, this[to].v);
      this[to].computed.p = true;
    }
    else if(this[to].computed.T == true){
      this[to].p = get_p_from_pT_relation(this[from].p, this[from].T, this[to].T);
      this[to].computed.p = true;
    }
  }
  /* Finding p */

  /* Finding v */
  if(this[to].determined_by.v == from && this[to].computed.v == false){
    if(this[to].computed.p == true){
      this[to].v = get_v_from_pv_relation(this[from].p, this[from].v, this[to].p);
      this[to].computed.v = true;
    }
    else if(this[to].computed.T == true){
      this[to].v = get_v_from_vT_relation(this[from].v, this[from].T, this[to].T);
      this[to].computed.v = true;
    }
  }
  /* Finding v */

  /* Finding T */
  if(this[to].determined_by.T == from && this[to].computed.T == false){
    if(this[to].computed.p == true){
      this[to].T = get_T_from_pT_relation(this[from].p, this[from].T, this[to].p);
      this[to].computed.T = true;
    }
    else if(this[to].computed.v == true){
      this[to].T = get_T_from_vT_relation(this[from].v, this[from].T, this[to].v);
      this[to].computed.T = true;
    }
  }
  /* Finding T */

}

/**************************************************************************************************/

function get_p_from_pv_relation(p1,v1,v2){
  var constant = p1*Math.pow(v1, γ_air);
  var p2 = constant/Math.pow(v2, γ_air);
  return p2
}

function get_p_from_pT_relation(p1,T1,T2){
  var constant = Math.pow(p1, 1-γ_air)*Math.pow(T1, γ_air);
  var p2 = Math.pow( constant/Math.pow(T2, γ_air), 1/(1-γ_air) );
  return p2
}

/**************************************************************************************************/

function get_v_from_pv_relation(p1,v1,p2){
  var constant = p1*Math.pow(v1, γ_air);
  var v2 = Math.pow(constant/p2, (1/γ_air));
  return v2
}

function get_v_from_vT_relation(v1,T1,T2){
  var constant = T1*Math.pow(v1, γ_air-1);
  var v2 = Math.pow(constant/T2, 1/(γ_air-1));
  return v2
}

/**************************************************************************************************/

function get_T_from_pT_relation(p1,T1,p2){
  var constant = Math.pow(p1, 1-γ_air)*Math.pow(T1, γ_air);
  var T2 = Math.pow(constant/Math.pow(p2, 1-γ_air), 1/γ_air);
  return T2
}

function get_T_from_vT_relation(v1,T1,v2){
  var constant = T1*Math.pow(v1, γ_air-1);
  var T2 = constant/Math.pow(v2, γ_air-1);
  return T2
}
