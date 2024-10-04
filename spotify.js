const toggleButton=document.getElementsByClassName('toggle-button')[0]
const sidebar=document.getElementsByClassName('side-bar')[0]

toggleButton.addEventListener(click, () => {
    sidebar.classList.toggle(active)
})