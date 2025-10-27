const arrayOfTodo = JSON.parse(localStorage.getItem('js-json')) || [];

//call this function to display the existing elements in an array
renderList()


// getting the value from the array
// use a for loop to access each index
// render it on the webpage
function renderList() {
    let accumulate = '';

    for(let i = 0; i < arrayOfTodo.length; i++) {
        const elementObject = arrayOfTodo[i];

        const {name,date} = elementObject;
        
        const html = `<p>
        ${name} 
        ${date}<button onclick="
            arrayOfTodo.splice(${i}, 1)
            renderList()">
            Delete
            </button></p>`

        accumulate += html;                                                                                             
    }
    document.querySelector('.js-div')
    .innerHTML = accumulate;

    }

// getting the value from the input box
// insert it the empty array provided 
function todo() {

    const task = document.querySelector('.js-input-task');
    const name = task.value;

    const getDate = document.querySelector('.js-date');
    const date = getDate.value;

    

    arrayOfTodo.push({
        name, 
        date
    });

    localStorage.setItem('js-json',JSON.stringify(arrayOfTodo));

    task.value = '';
    getDate.value = '';

    renderList();
}