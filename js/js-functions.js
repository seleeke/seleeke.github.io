// Function to show clicked main content area (while simultaneously hiding all other main content areas)
function menuOpenClose(par) {
  var clickedSection = par;
  const sections = ["aboutContent", "workContent", "resumeContent", "contactContent"];
  var otherSections = sections.filter(function(value, index, arr){
      return value != clickedSection;
  });

  x = document.getElementById(par);

  // get the elements of IDs that are not clicked on -- use querySelectorAll
  // Here, we're creating an array named "id" that takes all of the individual ids in otherSections and forms them into an array, separating them with a comma via the join method.
  y = document.querySelectorAll(
    otherSections.map(id => `#${id}`).join(', ')
  );

  if (x.className == "subContent closed") {
    x.className = "subContent open";
    y[0].className = "subContent closed";
    y[1].className = "subContent closed";
    y[2].className = "subContent closed";

  }
  else {
    x.className = "subContent closed";
    y[0].className = "subContent closed";
    y[1].className = "subContent closed";
    y[2].className = "subContent closed";

  }
}

// Function to filter the work content items by category on click
function menuFilter(par) {
  var x;
  var i;

  x = document.getElementsByClassName('selectedWorkEntry');
  // console.log(x);

 for (i = 0; i < x.length; i++) {
   if(!x[i].classList.contains(par)) {
     x[i].style.display = "none";
     // console.log('does not contain class');
   }
   else {
     x[i].style.display = "block";
   }
 }
}

// Function to filter the work content items by category on click
function menuActive(par) {
  var clickedFilterButton = par;
  const filterButtons = ["allFilterButton", "urbanPlanningFilterButton", "housingFilterButton", "criminalJusticeFilterButton", "publicHealthFilterButton"];
  var otherFilterButtons = filterButtons.filter(function(value, index, arr){
      return value != clickedFilterButton;
  });

  x = document.getElementById(par);

  // get the elements of IDs that are not clicked on -- use querySelectorAll
  // Here, we're creating an array named "id" that takes all of the individual ids in otherSections and forms them into an array, separating them with a comma via the join method.
  y = document.querySelectorAll(
    otherFilterButtons.map(id => `#${id}`).join(', ')
  );

  if (x.className == "workFilter inactiveButton") {
    x.className = "workFilter activeButton";
    y[0].className = "workFilter inactiveButton";
    y[1].className = "workFilter inactiveButton";
    y[2].className = "workFilter inactiveButton";
    y[3].className = "workFilter inactiveButton";

  }
  else {
    x.className = "workFilter activeButton";
    y[0].className = "workFilter inactiveButton";
    y[1].className = "workFilter inactiveButton";
    y[2].className = "workFilter inactiveButton";
    y[3].className = "workFilter inactiveButton";

  }
}
