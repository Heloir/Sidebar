// .show-sidebar classe para adicionar


const sidebartoggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closebtn = document.querySelector('.close-btn')


sidebartoggle.addEventListener('click', () =>{
    sidebar.classList.toggle('show-sidebar')
    sidebartoggle.classList.toggle('deletebutton')
})


closebtn.addEventListener('click', () =>{
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
    else{
        sidebar.classList.toggle('show-sidebar')
    }
    sidebartoggle.classList.remove('deletebutton')
})
