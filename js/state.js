/**************************************************************************************************/
// Defining a state

function State(id, p,v,T){
  this.id = id;
  this.p = p; this.v = v; this.T = T;
  this.known = { p: false, v: false, T: false };
  this.active = { p: false, v: false, T: false };
  this.checked = { p: false, v: false, T: false };
  this.determined_by = { p: null, v: null, T: null };
  this.computed = { p: false, v: false, T: false };
  this.params = ['p', 'v', 'T'];
}

/*******************************************************************************************/

State.prototype.updateDOM = function(){
  this.params.forEach(param => {
    if(this.checked[param] == false && this.known[param] == true){ this.active[param] = false; } else { this.active[param] = true; }
  })

  this.params.forEach(param => {
    this.dom[param].checkbox._groups[0][0].disabled = !this.active[param];
    this.dom[param].slider._groups[0][0].disabled = !this.checked[param];
    this.dom[param].input._groups[0][0].disabled = !this.checked[param];

    this.dom[param].slider._groups[0][0].value = this[param];
    this.dom[param].input._groups[0][0].value = this[param];
  })
}

/*******************************************************************************************/

State.prototype.assignKnowns = function(){
  if(this.getKnownCount() == 2){
    this.params.forEach(param => { if(this.known[param] == false){ this.known[param] = true; this.determined_by[param] = 'state'; } });
  }
}

State.prototype.getKnownCount = function(){
  var count = 0;
  this.params.forEach(param => { if(this.known[param] == true){ count++; } })
  return count
}

/*******************************************************************************************/

State.prototype.compute = function(){
  if(this.determined_by.p == 'state' && this.computed.p == false){
    if(this.computed.v == true && this.computed.T == true){ this.p = getPressure(this.v, this.T); this.computed.p = true; }
  }

  if(this.determined_by.v == 'state' && this.computed.v == false){
    if(this.computed.p == true && this.computed.T == true){ this.v = getVolume(this.p, this.T); this.computed.v = true; }
  }

  if(this.determined_by.T == 'state' && this.computed.T == false){
    if(this.computed.p == true && this.computed.v == true){ this.T = getTemperature(this.p, this.v); this.computed.T = true; }
  }
}

State.prototype.getComputedCount = function(){
  var count = 0;
  this.params.forEach(param => { if(this.computed[param] == true){ count++; } })
  return count
}

/*******************************************************************************************/
// Gas law relations for arrays

function getTemperatureArray(p,v){
  return numeric.mul( numeric.mul(p, v), (1000/R_air) )
}

function getPressureArray(v, T){
  return numeric.mul( numeric.div(T, v), (R_air/1000) )
}

function getVolumeArray(p, T){
  return numeric.mul( numeric.div(T, v), (R_air/1000) )
}

/*******************************************************************************************/
// Gas law relations

function getVolume(p, T){
  return R_air*T/(p*1000)
}

function getPressure(v, T){
  return (R_air*T/v)/1000
}

function getTemperature(p, v){
  return (p*1000)*v/R_air
}
