// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>CHESSBOARD</h1>`;
for (let j = 0; j < 8; j++) {
  let nodeP = document.createElement('div');
  appDiv.appendChild(nodeP);
  nodeP.className = 'parent';

  for (let i = 0; i < 8; i++) {
    let node = document.createElement('div');
    node.setAttribute('id', i + '' + j);
    node.addEventListener('click', function() {
      callMe(node);
    });
    if ((i + j) % 2 == 0) {
      node.className = 'box';
      nodeP.appendChild(node);
    } else {
      node.className = 'boxW';
      nodeP.appendChild(node);
    }
  }
}

function callMe(n) {
  n.classList.toggle('highlight');
}
