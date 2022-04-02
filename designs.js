// This selects the color input
let color = document.getElementById('colorPicker');

//This saves the selected color into a variable
let chosenColor = color.value;

// This selects the size input
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');

// This selects the submit Button and stores it into a variable
const create = document.getElementById('submitButton');

//This creates the grid upon the click of the submit button
create.addEventListener('click',  function makeGrid(e) {
    e.preventDefault()
        //This loop creates the table rows
        for(let row = 0; row < height.value; row++) {
            //This selects the canvas
            let gridTable = document.getElementById('pixelCanvas');

            //This creates the tr elements
            let row = document.createElement('tr');
            //These append the rows to the gridTable
            gridTable.appendChild(row);

            //This loop creates the table columns
            for(let column = 0; column < width.value; column++) {
                //This creates the td elements
                let column = document.createElement('td');
    
                //This appends the columns to the rows
                row.appendChild(column);

                //This sets the background of each cell to the chosen color when the cursor hits the cell
                column.addEventListener('click', function fillColor() {
                    column.style.backgroundColor = color.value;

                    //This deletes a cell color if clicked
                    column.addEventListener('click', function deleteColor() {
                        column.style.backgroundColor = 'transparent';
                    });
                });
            };
        };
    //This deletes the canvas when the submit button is clicked again
    create.addEventListener('click', function deleteGridTable() {
        let gridTable = document.getElementById('pixelCanvas');
        gridTable.remove('tr');
        gridTable.remove('td');
        setTimeout(location.reload(), 1500);
    });
});

