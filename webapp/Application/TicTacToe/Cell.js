export default class Cell{
    constructor(index)
    {
        this.index = index;
        this.initCell(this.index);
    }

    initCell(index)
    {
        cellContainer.appendChild(document.createElement('div'));
        cellContainer.lastChild.className = 'cell';
        cellContainer.lastChild.setAttribute('index', index);
    }
}