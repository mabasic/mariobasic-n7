/*
DROPDOWN MENU (Toggle)
*/

const dropdownMenus = document.getElementsByClassName('dropdown-menu')

function hideAllDropdownMenus(except) {
	for (const dropdownMenu of dropdownMenus) {
		if (dropdownMenu !== except) {
			dropdownMenu.classList.remove("show")
		}
	}
}

const dropdownToggles = document.getElementsByClassName('dropdown-toggle')

for (const dropdownToggle of dropdownToggles) {
	dropdownToggle.addEventListener('click', (event) => {
		event.preventDefault()

		const targetDropdownMenu = dropdownToggle.nextElementSibling

		hideAllDropdownMenus(targetDropdownMenu)

		targetDropdownMenu.classList.toggle('show')
	})
}

// Hides dropdown menus when the user clicks somewhere else.
document.addEventListener("click", function(event) {
	// If user clicks the element, do nothing.
	if (event.target.closest(".dropdown-toggle")) {
		return
	}

	// If user clicks outside the element, hide all!
	hideAllDropdownMenus()
})



/*
NAVBAR MENU (Toggle)
*/

const navbarToggles = document.getElementsByClassName('navbar-toggler')

for (const navbarToggle of navbarToggles) {
	navbarToggle.addEventListener('click', () => {
		const bsTarget = navbarToggle.getAttribute('data-bs-target')

		const navbar = document.querySelector(bsTarget)

		navbar.classList.toggle('show')
	})
}
