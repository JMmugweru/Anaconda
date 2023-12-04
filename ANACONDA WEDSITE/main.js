const header = document.querySelector("header");
const sectionOne = document.querySelector(".bg-section");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



// Get the button elements
const inset = document.getElementById('inset');
const set = document.getElementById('set');

// Get references to the divs
const teams = document.getElementById('teams');
const streamline = document.getElementById('streamline');

// Add click event listeners to show teams
inset.addEventListener('click', function() {
  teams.style.display = 'flex';
  streamline.style.display = 'none';
});

// Add click event listeners to show stremline
set.addEventListener('click', function() {
  teams.style.display = 'none';
  streamline.style.display = 'flex';
});


const left = document.getElementById('left');
const right = document.getElementById('right');
const cards = document.querySelectorAll('.card');

let currentCardIndex = 0;

// Function to show the current card and hide the rest
function showCurrentCard() {
  cards.forEach((card, index) => {
    if (index === currentCardIndex) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Show the initial card
showCurrentCard();

// Event listener for the Next button
right.addEventListener('click', function() {
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  showCurrentCard();
});

// Event listener for the Previous button
left.addEventListener('click', function() {
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  showCurrentCard();
});


window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("head").classList.add('is-scrolling');
		} else {
			document.querySelector("head").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const phase = document.querySelector('.phase');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		phase.classList.toggle('is-active');
	});
}




function toggleelite(iconId, eliteId) {
  var icon = document.getElementById(iconId);
  var elite = document.getElementById(eliteId);

  if (elite.style.display === 'none') {
    elite.style.display = 'block';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  } else {
    elite.style.display = 'none';
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
  }
}

document.getElementById('toggleIcon1').addEventListener('click', function() {
  toggleelite('toggleIcon1', 'elite1');
});

document.getElementById('toggleIcon2').addEventListener('click', function() {
  toggleelite('toggleIcon2', 'elite2');
});

document.getElementById('toggleIcon3').addEventListener('click', function() {
  toggleelite('toggleIcon3', 'elite3');
});

document.getElementById('toggleIcon4').addEventListener('click', function() {
  toggleelite('toggleIcon4', 'elite4');
});





function toggleContent(iconId, litId) {
  var icon = document.getElementById(iconId);
  var lit = document.getElementById(litId);

  if (lit.style.display === 'none') {
    lit.style.display = 'block';
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  } else {
    lit.style.display = 'none';
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
  }
}

document.getElementById('toggleIcon7').addEventListener('click', function() {
  toggleContent('toggleIcon7', 'lit7');
});

document.getElementById('toggleIcon5').addEventListener('click', function() {
  toggleContent('toggleIcon5', 'lit4');
});

document.getElementById('toggleIcon6').addEventListener('click', function() {
  toggleContent('toggleIcon6', 'lit5');
});


