export const plotMatrix = () => {

  // variables

  // const hideAxes = () => {
  //   return {
  //     showline: false,
  //     fixedrange: true,
  //     disabled: true
  //   }
  // }

  // row A

  var traceA1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x1',
    yaxis: 'y1',    
    type: 'histogram',
    marker: { color: 'plum' },
  };

  var traceA2 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x2',
    yaxis: 'y2',    
    type: 'scatter',
    marker: { color: 'lightblue' },
  };

  var traceA3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };

  var traceA4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'scatter',
    marker: { color: '#F5DEB3' },
  };

  var traceA5 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x5',
    yaxis: 'y5',
    type: 'scatter',
    marker: { color: 'pink' },
  };  

  // row B
  
  var traceB1 = {
    x: [300, 400, 500],
    y: [600, 700, 800],
    xaxis: 'x6',
    yaxis: 'y6',
    type: 'scatter',
    marker: { color: 'lightblue' },
  };
  
  var traceB2 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x7',
    yaxis: 'y7',
    type: 'histogram',
    marker: { color: 'lightgray' },
  };

  var traceB3 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x8',
    yaxis: 'y8',
    type: 'scatter',
    marker: { color: '#F5DEB3' },
  };

  var traceB4 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x9',
    yaxis: 'y9',
    type: 'scatter',
    marker: { color: 'pink' },
  };

  var traceB5 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x10',
    yaxis: 'y10',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  // row C

  var traceC1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x11',
    yaxis: 'y11',    
    type: 'scatter',
    marker: { color: 'lightgray' },
  };
  
  var traceC2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x12',
    yaxis: 'y12',
    type: 'scatter',
    marker: { color: '#F5DEB3' },
  };

  var traceC3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x13',
    yaxis: 'y13',
    type: 'histogram',
    marker: { color: 'pink' },
  };

  var traceC4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x14',
    yaxis: 'y14',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  var traceC5 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x15',
    yaxis: 'y15',
    type: 'scatter',
    marker: { color: 'lightblue' },
  };

  // row D

  var traceD1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x16',
    yaxis: 'y16',    
    type: 'scatter',
    marker: { color: '#F5DEB3' },
  };
  
  var traceD2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x17',
    yaxis: 'y17',
    type: 'scatter',
    marker: { color: 'pink' },
  };

  var traceD3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x18',
    yaxis: 'y18',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  var traceD4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x19',
    yaxis: 'y19',
    type: 'histogram',
    marker: { color: 'lightblue' },
  };

  var traceD5 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x20',
    yaxis: 'y20',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };

  // row E
  
  var traceE1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x21',
    yaxis: 'y21',    
    type: 'scatter',
    marker: { color: 'pink' },
  };
  
  var traceE2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x22',
    yaxis: 'y22',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  var traceE3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x23',
    yaxis: 'y23',
    type: 'scatter',
    marker: { color: 'lightblue' },
  };

  var traceE4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x24',
    yaxis: 'y24',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };

  var traceE5 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x25',
    yaxis: 'y25',
    type: 'histogram',
    marker: { color: '#F5DEB3' },
  };

  // variables
  
  var data = [
    traceA1, traceA2, traceA3, traceA4, traceA5,
    traceB1, traceB2, traceB3, traceB4, traceB5,
    traceC1, traceC2, traceC3, traceC4, traceC5,
    traceD1, traceD2, traceD3, traceD4, traceD5,
    traceE1, traceE2, traceE3, traceE4, traceE5
  ];
  
  var layout = {
    title: 'Title for Matrix Test<br>Subtitle for Matrix Test', 
    grid: {
      rows: 5,
      columns: 5,
      pattern: 'independent',
      xgap: .325,
      ygap: .325,
    },
    width: 1034,
    height: 1034,
    // padding: 2,
    bargap: 0.05, 
    bargroupgap: 0.2, 
    margin: {
      b: 65,
    },
    legend: {
      showLegend: false
    },

    xaxis1: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis2: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis2: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis3: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis4: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis5: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis6: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis7: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis8: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis9: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis10: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis11: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis12: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis13: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis14: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis15: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis16: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis17: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis18: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis19: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis20: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis21: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis22: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis23: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis24: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis25: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis1: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis2: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis3: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis4: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis5: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis6: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis7: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis8: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis9: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis10: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis11: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis12: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis13: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis14: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis15: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis16: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis17: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis18: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis19: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis20: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis21: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis22: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis23: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis24: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis25: { ticklen: 0, tickwidth: 0, color: 'white' },
    
  };

  // invoke

  Plotly.newPlot('matrix-2', data, layout);
}

// to do
  // rm axis labels from cells
  // add multiple lines in scatter cells
  // add multople bars in scatter cells


// draft of multiple line scatters

  // var traceA2 = [
  //   {
  //     name: '1st Run',
  //     mode: 'markers',
  //     // x: [20, 30, 40],
  //     y: [50, 60, 70],
  //     xaxis: 'x2',
  //     yaxis: 'y2',
  //     type: 'scatter',
  //     marker: { color: 'plum' },
  //   },
  //   {
  //     name: '2nd Run',
  //     mode: 'markers',
  //     // x: [20, 30, 40],
  //     y: [500, 600, 700],
  //     xaxis: 'x2',
  //     yaxis: 'y2',
  //     type: 'scatter',
  //     marker: { color: 'plum' },
  //   },
  //   {
  //     name: '3rd Run',
  //     mode: 'markers',
  //     // x: [20, 30, 40],
  //     y: [5, 6, 7],
  //     xaxis: 'x2',
  //     yaxis: 'y2',
  //     type: 'scatter',
  //     marker: { color: 'plum' },
  //   },
  //   {
  //     name: '4th Run',
  //     mode: 'markers',
  //     // x: [20, 30, 40],
  //     y: [1, 2, 3],
  //     xaxis: 'x2',
  //     yaxis: 'y2',
  //     type: 'scatter',
  //     marker: { color: 'plum' },
  //   },
  // ]