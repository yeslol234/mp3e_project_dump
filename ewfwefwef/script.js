let config;
fetch('nodes.config.json')
  .then(response => response.json())
  .then(data => {
    config = JSON.parse(data);
  })
  .catch(error => {
    console.error('Error reading config file:', error);
  });

// Get the draggable node element
const node = document.getElementById('node');
const container = document.getElementById('container');
let selectedNode = null;
let offsetX, offsetY;

container.addEventListener('mousedown', (e) => {
    const clickedNode = e.target.closest('.node');
    if (clickedNode) {
        selectedNode = clickedNode;
        offsetX = e.clientX - selectedNode.getBoundingClientRect().left;
        offsetY = e.clientY - selectedNode.getBoundingClientRect().top;
    }
});

container.addEventListener('mousemove', (e) => {
    if (!selectedNode) return;
    const x = e.clientX - container.getBoundingClientRect().left - offsetX;
    const y = e.clientY - container.getBoundingClientRect().top - offsetY;
    selectedNode.style.left = x + 'px';
    selectedNode.style.top = y + 'px';
});

container.addEventListener('mouseup', () => {
    selectedNode = null;
});