// Create your event listeners here
/*
When the DOM is loaded, alert the user that the DOM has loaded.

When the #red-input input contains the word "red", change the background color 
of the input to red. Otherwise, remain transparent.

When #add-item is pressed, a new <li> element with the value from #list-add is created 
and appended to the <ul>.


When a new color is selected in #color-select, change the background color of the <section> 
it belongs to.

When #remove-listeners is clicked, all event listeners from the 
previous three sections should be removed.
*/


window.addEventListener('DOMContentLoaded', () => {
    // alert('Dom has loaded')

    const redInputId = document.querySelector('#red-input')

    redInputId.addEventListener('input', (e) => {
        console.log("event", e)
        if(e.target.value.includes('red')){
            redInputId.style.backgroundColor = 'red'
        } else {
            redInputId.style.backgroundColor = ''
        }
    })


    const button  = document.getElementById('add-item')
    const input = document.getElementById('list-add')

    const addLi = (e) => {
        const li = document.createElement('li')
        console.log('event logging here...', e)


        li.innerText = input.value

        document.querySelector('ul').append(li)
    }

    button.addEventListener('click', addLi)

    const colorSelect = document.getElementById('color-select')

    colorSelect.addEventListener('change', (e) => {

        console.log('event logging here...', e)

        const section = document.getElementById('part-3')

        section.style.backgroundColor = e.target.value
    })


    const removeButton = document.getElementById('remove-listeners')

    removeButton.addEventListener('click', (e) => {
        redInputId.replaceWith(redInputId.cloneNode(true))
        button.removeEventListener('click', addLi)
        colorSelect.replaceWith(colorSelect.cloneNode(true))
    })

})