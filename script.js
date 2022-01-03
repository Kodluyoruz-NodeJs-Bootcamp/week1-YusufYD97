const onDragOver = (e) => {
    e.preventDefault();
}

const onDragStart = (e) => {
    e.dataTransfer.setData('text', e.target.id);
}

const onDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    e.target.querySelector('.drag-column-body').appendChild(document.getElementById(data));
}
