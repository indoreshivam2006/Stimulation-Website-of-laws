/*******************************************************************************************/
// Update

function updateDOM(){
  states_array.forEach(d => { d.updateDOM(); });
  updateGraph();
}

/*******************************************************************************************/
// Compute

function compute(){

  /* Setup computed = true for the checked boxes and false for others */
  states_array.forEach(state => {
    Object.keys(params).forEach(param => {
      state.computed[param] = state.checked[param];
      if(state.checked[param] == false){ state[param] = null; }
    })
  })
  /* Setup computed = true for the checked boxes and false for others */

  processes_array.forEach(process => {
    process.trajectory = { p: [], v: [], T: [] };
    process.trajectory_computed = false;
  })

  /* Assign computed */
  var change_toggle = true, archive_computed = [];
  while(change_toggle){
    archive_computed = states_array.map(state => {
      return Object.keys(params).map(param => { return state.computed[param] })
    })

    states_array.forEach(state => {
      state.compute();
    })

    processes_array.forEach(process => {
      process.compute();
    })

    change_toggle = false;
    states_array.forEach((state,i) => {
      Object.keys(params).forEach((param,j) => { if(state.computed[param] != archive_computed[i][j]){ change_toggle = true; } })
    })
  }
  /* Assign computed */

  updateDOM();
}

/*******************************************************************************************/
// Assign Knowns

function assignKnowns(){
  /* checked: determined by by user,
     known & determined_by: assigned the same as checked and will be calculated further,
     active: calculated later in updateDOM  */

  states_array.forEach(state => {
    Object.keys(params).forEach(param => {
      state.known[param] = state.checked[param];
      if(state.checked[param]){ state.determined_by[param] = 'user'; } else { state.determined_by[param] = null; }
    })
  })

  /* Assign known and determined_by */
  var change_toggle = true, archive_known = [];
  while(change_toggle){
    archive_known = states_array.map(state => {
      return Object.keys(params).map(param => { return state.known[param] })
    })

    states_array.forEach(state => {
      state.assignKnowns();
    })

    processes_array.forEach(process => {
      process.assignKnowns();
    })

    change_toggle = false;
    states_array.forEach((state,i) => {
      Object.keys(params).forEach((param,j) => { if(state.known[param] != archive_known[i][j]){ change_toggle = true; } })
    })
  }
  /* Assign known and determined_by */

  updateDOM();
}
