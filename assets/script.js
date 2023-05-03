function commissionType(evt, commissionName) {

  var i, commissiontab;
  var x = document.getElementsByClassName("commission");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  commissiontab = document.getElementsByClassName("commissiontab");
  for (i = 0; i < x.length; i++) {
    commissiontab[i].className = commissiontab[i].className.replace(" selected", "");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  evt.currentTarget.className += " selected";
  document.getElementById("mobile-menu").className = "mobile-menu";

  if (window.matchMedia("(min-width: 900px)").matches) {
    document.getElementById(commissionName).style.display = "grid";
  } else {
    document.getElementById(commissionName).style.display = "flex";
  }
}

/* ---I'm so fucking tired don't talk to me--- */
function mobilecommissionType(evt, commissionName) {

  var i, commissiontab;
  var x = document.getElementsByClassName("commission");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  commissiontab = document.getElementsByClassName("mcommissiontab");
  for (i = 0; i < x.length; i++) {
    commissiontab[i].className = commissiontab[i].className.replace(" selected", "");
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  evt.currentTarget.className += " selected";
  document.getElementById("mobile-menu").className = "mobile-menu";

  if (window.matchMedia("(min-width: 900px)").matches) {
    document.getElementById(commissionName).style.display = "grid";
  } else {
    document.getElementById(commissionName).style.display = "flex";
  }
}

function toggleNav() {
  var x = document.getElementById("mobile-menu");
  if (x.className === "mobile-menu") {
    x.className += " responsive";
  } else {
    x.className = "mobile-menu";
  }

}