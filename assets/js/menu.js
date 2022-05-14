function menus() {
  //top menu
  var top_menu = null;
  top_menu += '<div class="col-lg-8 col-sm-8">';
  top_menu += '<div class="left-content">';
  top_menu += "<p>Awarded with Outstanding Institute Award by NITTTR";
  top_menu +=
    '<span style="padding-left:10%;"><i class="fa fa-briefcase">&nbsp;</i><a href="placements.html">Placements</a></span>';
  top_menu +=
    '<span style="padding-left:5%;"><i class="fa fa-briefcase">&nbsp;</i><a href="placements.html">Citizen Charter &amp; RTI</a></span>';
  top_menu += "</p>";
  top_menu += "</div>";
  top_menu += "</div>";
  top_menu += '<div class="col-lg-3 col-sm-3">';
  top_menu += '<div class="right-icons">';
  top_menu += "<ul>";
  top_menu += '<li><a href="#"><i class="fa fa-facebook"></i></a></li>';
  top_menu +=
    '<li><a href="mailto:gpcbathinda@punjab.gov.in"><i class="fa fa-envelope"></i></a></li>';
  top_menu += "</ul>";
  top_menu += "</div>";
  top_menu += "</div>";

  document.getElementById("top-menu-placeholder").innerHTML = top_menu;
}
