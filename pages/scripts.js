const themeToggle = document.getElementById('theme-icon')

let navbar = document.getElementById('navbar')
let dropdownMenu = document.getElementById('dropdown-menu')
let gallery = document.getElementById('gallery')
let footer = document.getElementById('footer')

themeToggle.onclick = function() {
  document.body.classList.toggle('dark-theme')
  document.body.classList.remove('light-theme')

  navbar.classList.toggle('navbar-dark')
  navbar.classList.toggle('bg-dark')
  navbar.classList.toggle('bg-white')

  dropdownMenu.classList.toggle('dropdown-menu-dark')

  gallery.classList.toggle('bg-dark')

  footer.classList.toggle('bg-black')
  footer.classList.toggle('text-white')

  if(document.body.classList.contains('dark-theme')) {
    themeToggle.src = '../assets/img/sun.png'
    theme = 'dark'
  } else {
    themeToggle.src = '../assets/img/moon.png'
    theme = 'light'
    document.body.classList.add('light-theme')
  }

  localStorage.setItem('pageTheme', JSON.stringify(theme))
}

let getTheme = JSON.parse(localStorage.getItem('pageTheme'))
if(getTheme === 'dark') {
  document.body.classList.toggle('dark-theme')
  document.body.classList.remove('light-theme')

  navbar.classList.toggle('navbar-dark')
  navbar.classList.toggle('bg-dark')
  navbar.classList.toggle('bg-white')

  dropdownMenu.classList.toggle('dropdown-menu-dark')

  gallery.classList.toggle('bg-dark')

  footer.classList.toggle('bg-black')
  footer.classList.toggle('text-white')

  if(document.body.classList.contains('dark-theme')) {
    themeToggle.src = '../assets/img/sun.png'
    theme = 'dark'
  } else {
    themeToggle.src = '../assets/img/moon.png'
    theme = 'light'
    document.body.classList.add('light-theme')
  }
}