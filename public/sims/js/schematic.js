var line = d3.line().x(d => { return d.x }).y(d => { return d.y });
var state_points = [];

function createSchematic(){
  var svg = d3.select('#schematic_svg');
  var width = parseFloat(svg.attr('width'));
  var height = parseFloat(svg.attr('height'));

  var centre = { x: 0.5*width, y: 0.5*height };

  /* Evaporator */
  var evaporator = {};
  evaporator.cx = centre.x;
  evaporator.cy = centre.y + 0.3*height;
  evaporator.size = 0.2*width;
  evaporator.g = svg.append('g').attrs({ 'transform': 'translate(' +evaporator.cx+ ',' +evaporator.cy+ ')' });
  evaporator.symbol = evaporator.g.append('rect')
    .attrs({ x: -0.5*evaporator.size, y: -0.25*evaporator.size, width: evaporator.size, height: 0.5*evaporator.size, rx: '2%', ry: '2%' })
    .styles({ fill: 'white', stroke: 'white' });

  evaporator.text = evaporator.g.append('text').attrs({ y: 0.55*evaporator.size }).styles({ 'text-anchor': 'middle', fill: 'gray' }).text('');
  evaporator.input_x = evaporator.cx - 0.5*evaporator.size;
  evaporator.input_y = evaporator.cy;
  evaporator.output_x = evaporator.cx + 0.5*evaporator.size;
  evaporator.output_y = evaporator.cy;

  /* Compressor */
  var compressor = {};
  compressor.cx = centre.x + 0.3*width;
  compressor.cy = centre.y;
  compressor.size = 0.1*width;
  compressor.g = svg.append('g').attrs({ 'transform': 'translate(' +compressor.cx+ ',' +compressor.cy+ ')' });
  var temp = [{x: -0.5, y: -0.8}, {x: 0.5, y: -0.3}, {x: 0.5, y: 0.3}, {x: -0.5, y: 0.8}, {x: -0.5, y: -0.8}];
  temp.forEach(d =>{ d.x *= compressor.size; d.y *= compressor.size; })
  compressor.symbol = compressor.g.append('path')
    .attrs({ d: line(temp) })
    .styles({ fill: 'white', stroke: 'white' });

  compressor.text = compressor.g.append('text').attrs({ x: -0.6*compressor.size }).styles({ 'text-': 'end', fill: 'gray' }).text('');
  compressor.input_x = compressor.cx - 0.5*compressor.size;
  compressor.input_y = compressor.cy + 0.8*compressor.size;
  compressor.output_x = compressor.cx + 0.5*compressor.size;
  compressor.output_y = compressor.cy - 0.3*compressor.size;

  /* Condenser */
  var condenser = {};
  condenser.cx = centre.x;
  condenser.cy = centre.y - 0.3*height;
  condenser.size = 0.2*width;
  condenser.g = svg.append('g').attrs({ 'transform': 'translate(' +condenser.cx+ ',' +condenser.cy+ ')' });
  condenser.symbol = condenser.g.append('rect')
    .attrs({ x: -0.5*condenser.size, y: -0.25*condenser.size, width: condenser.size, height: 0.5*condenser.size, rx: '2%', ry: '2%' })
    .styles({ fill: 'white', stroke: 'white' });

  condenser.text = condenser.g.append('text').attrs({ y: 0.55*condenser.size }).styles({ 'text': 'middle', fill: 'gray' }).text('');
  condenser.input_x = condenser.cx + 0.5*condenser.size;
  condenser.input_y = condenser.cy;
  condenser.output_x = condenser.cx - 0.5*condenser.size;
  condenser.output_y = condenser.cy;

  /* Throttle */
  var throttle = {};
  throttle.cx = centre.x - 0.3*width;
  throttle.cy = centre.y;
  throttle.size = 0.1*width;
  throttle.g = svg.append('g').attrs({ 'transform': 'translate(' +throttle.cx+ ',' +throttle.cy+ ')' });
  throttle.symbol = throttle.g.append('g');
  throttle.symbol.append('circle')
    .attrs({ r: 0.5*throttle.size })
    .styles({ fill: 'white', stroke: 'white' });

  var temp_len = 0.5*Math.cos(0.25*Math.PI);
  var temp = [{x: -temp_len, y: -temp_len}, {x: temp_len, y: temp_len}];
  temp.forEach(d =>{ d.x *= throttle.size; d.y *= throttle.size; })
  throttle.symbol.append('path')
    .attrs({ d: line(temp) })
    .styles({ fill: 'white', stroke: 'white' });

  var temp = [{x: temp_len, y: -temp_len}, {x: -temp_len, y: temp_len}];
  temp.forEach(d =>{ d.x *= throttle.size; d.y *= throttle.size; })
  throttle.symbol.append('path')
    .attrs({ d: line(temp) })
    .styles({ fill: 'white', stroke: 'white' });

  throttle.text = throttle.g.append('text').attrs({ x: -0.6*throttle.size }).styles({ 'text-anchor': 'end', fill: 'gray' }).text('');
  throttle.input_x = throttle.cx;
  throttle.input_y = throttle.cy - 0.5*throttle.size;
  throttle.output_x = throttle.cx;
  throttle.output_y = throttle.cy + 0.5*throttle.size;

  /* Evaporator to Compressor */
  var temp = [{x: evaporator.output_x, y: evaporator.output_y}, {x: compressor.input_x, y: evaporator.output_y}, {x: compressor.input_x, y: compressor.input_y}];
  svg.append('path')
    .attrs({ d: line(temp) })
    .styles({ stroke: 'white', fill: 'none' });
  var temp_circle = svg.append('circle')
    .attrs({ cx: temp[1].x, cy: temp[1].y, r: 3, 'data-toggle': '', 'data-placement': 'right', 'data-content': 'State 1' })
    .styles({ fill: 'white' });
  state_points.push(temp_circle);

    /* Compressor to Condenser */
  var temp = [{x: compressor.output_x, y: compressor.output_y}, {x: compressor.output_x, y: condenser.input_y}, {x: condenser.input_x, y: condenser.input_y}];
  svg.append('path')
    .attrs({ d: line(temp) })
    .styles({ stroke: 'white', fill: 'none' });
  var temp_circle = svg.append('circle')
  .attrs({ cx: temp[1].x, cy: temp[1].y, r: 3, 'data-toggle': '', 'data-placement': 'right', 'data-content': 'State 2' })
    .styles({ fill: 'white' });
  state_points.push(temp_circle);

  /* Condenser to Throttle */
  var temp = [{x: condenser.output_x, y: condenser.output_y}, {x: throttle.input_x, y: condenser.output_y}, {x: throttle.input_x, y: throttle.input_y}];
  svg.append('path')
    .attrs({ d: line(temp) })
    .styles({ stroke: 'white', fill: 'none' });
  var temp_circle = svg.append('circle')
    .attrs({ cx: temp[1].x, cy: temp[1].y, r: 3, 'data-toggle': '', 'data-placement': 'left', 'data-content': 'State 3' })
    .styles({ fill: 'white' });
  state_points.push(temp_circle);

    /* Throttle to Evaporator */
  var temp = [{x: throttle.output_x, y: throttle.output_y}, {x: throttle.output_x, y: evaporator.input_y}, {x: evaporator.input_x, y: evaporator.input_y}];
  svg.append('path')
    .attrs({ d: line(temp) })
    .styles({ stroke: 'white', fill: 'none' });
  var temp_circle = svg.append('circle')
    .attrs({ cx: temp[1].x, cy: temp[1].y, r: 3, 'data-toggle': '', 'data-placement': 'left', 'data-content': 'State 4' })
    .styles({ fill: 'white' });
  state_points.push(temp_circle);
}
