function View() {}

View.prototype.generateGrid = function() {
  var numOfRows = 5;
  var gridsPerRow = 5;
  var container;
  var gridsElement;
  var rowElement;
  var grid;
  var i;
  var j;

  function changeColor() {
    this.classList.add('blue');
  }

  gridsElement = document.createElement('div');
  gridsElement.setAttribute('class', 'grids');

  for (i = 0; i < numOfRows; i++) {
    rowElement = document.createElement('div');
    rowElement.setAttribute('class', 'row');

    for (j = 0; j < gridsPerRow; j++) {
      gridElement = document.createElement('div');
      gridElement.setAttribute('class', 'grid');
      gridElement.addEventListener('mouseover', changeColor);
      rowElement.appendChild(gridElement);
    }

    gridsElement.appendChild(rowElement);
  }

  container = document.getElementsByClassName('container')[0];
  container.appendChild(gridsElement);
};

window.onload = function() {
  view = new View();
  view.generateGrid();
};


