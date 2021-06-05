function navmenuopen() {
  document.getElementById('container').style.display="none";
  document.getElementById('logo').style.display="none";
  document.getElementById('close').style.display="inline-block";
  document.getElementById('open').style.display="none";
  document.getElementById('footer').style.display="none";
  document.getElementById('nav-list').style.display="block"; 
}
function navmenuclose() {
  document.getElementById('container').style.display="block";
  document.getElementById('logo').style.display="block";
  document.getElementById('close').style.display="none";
  document.getElementById('open').style.display="inline-block";
  document.getElementById('footer').style.display="block";
  document.getElementById('nav-list').style.display="none"; 
}
