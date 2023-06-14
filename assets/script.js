function commissionType( select='portrait' ){
  // Get all tabs
  const tabs = document.getElementsByClassName('commission');
  const btns = document.getElementsByClassName('commissiontab');

  // Loop tabs and set to hidden
  for ( const tab of tabs || [] ){
      tab.setAttribute('hidden','');
  }

  // Loop btns and remove class selected
  for ( const btn of btns || [] ){
      btn.classList.remove('selected');
  }

  // Add selected class to correct button
  btns[ `btn-${select}` ].classList.add('selected');

  // Unhide the selected tab
  tabs[ select ].removeAttribute('hidden');

  // Scroll to the selected tab
  tabs[ select ].scrollIntoView();

  document.getElementById("mobile-menu").className = "mobile-menu";
}

window.addEventListener('load', function() {
  // Parse URL search params
  const params = new URLSearchParams( location.search );

  // Get tab from url or set to undefined
  const tab = params.get('tab') ?? undefined;

  // Run command to unhide tab
  commissionType( tab );
}, false);

function toggleNav() {
  var x = document.getElementById("mobile-menu");
  if (x.className === "mobile-menu") {
    x.className += " responsive";
  } else {
    x.className = "mobile-menu";
  }

}
