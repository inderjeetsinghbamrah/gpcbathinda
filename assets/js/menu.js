function menus() {
  var menus = '<nav class="main-nav">';
  menus += "<!-- ***** Logo Start ***** -->";
  menus +=
    '<a href="index.html" class="logo"><span id="subcolor">GPC</span>Bathinda</a>';
  menus += "<!-- ***** Logo End ***** -->";
  menus += "<!-- ***** Menu Start ***** -->";
  menus += '<ul class="nav">';
  menus +=
    '<li class="scroll-to-section"><a href="index.html" class="active">Home</a></li>';
  menus += '<li class="has-sub">';
  menus += '<a href="javascript:void(0)">About Us</a>';
  menus += '<ul class="sub-menu">';
  menus += '<li><a href="organization.html">Organization</a></li>';
  menus += '<li><a href="principal_message.html">Principal\'s Message</a></li>';
  menus += '<li><a href="vision_mission.html">Vision & Mission</a></li>';
  menus += '<li><a href="history.html">History</a></li>';
  menus += '<li><a href="campus.html">Campus</a></li>';
  menus += "</ul>";
  menus += "</li>";
  menus += '<li class="has-sub">';
  menus += '<a href="javascript:void(0)">Academics & Admission</a>';
  menus += '<ul class="sub-menu">';
  menus += '<li><a href="organization.html">Organization</a></li>';
  menus += '<li><a href="principal_message.html">Principal\'s Message</a></li>';
  menus += '<li><a href="vision_mission.html">Vision & Mission</a></li>';
  menus += '<li><a href="history.html">History</a></li>';
  menus += '<li><a href="campus.html">Campus</a></li>';
  menus += "</ul>";
  menus += "</li>";
  menus += '<li class="has-sub">';
  menus += '<a href="javascript:void(0)">Departments</a>';
  menus += '<ul style="width:320px" class="sub-menu">';
  menus += '<li><a href="aa.html">Architectural Assistantship</a></li>';
  menus += '<li><a href="ce.html">Civil Engineering</a></li>';
  menus += '<li><a href="cse.html">Computer Science &amp; Engineering</a></li>';
  menus += '<li><a href="ee.html">Electrical Engineering</a></li>';
  menus += '<li><a href="ece.html">Electronics & Communications Engg</a></li>';
  menus += '<li><a href="it.html">Information Technology</a></li>';
  menus += '<li><a href="me.html">Mechanical Engineering</a></li>';
  menus +=
    '<li><a href="pie.html">Production and Industrial Engineering</a></li>';
  menus += '<li><a href="pharmacy.html">Pharmacy</a></li>';
  menus += '<li><a href="apsc.html">Applied Sciences</a></li>';
  menus += '<li><a href="workshop.html">Workshop</a></li>';
  menus += "</ul>";
  menus += "</li>";
  menus += '<li class="has-sub">';
  menus += '<a href="javascript:void(0)">Affiliations</a>';
  menus += '<ul class="sub-menu">';
  menus += '<li><a href="meetings.html">AICTE Approvals</a></li>';
  menus += '<li><a href="meeting-details.html">Meeting Details</a></li>';
  menus += "</ul>";
  menus += "</li>";
  menus += '<li class="has-sub">';
  menus += '<a href="javascript:void(0)">Infrastructure</a>';
  menus += '<ul class="sub-menu">';
  menus += '<li><a href="meetings.html">Upcoming Meetings</a></li>';
  menus += '<li><a href="meeting-details.html">Meeting Details</a></li>';
  menus += "</ul>";
  menus += "</li>";
  menus += "</ul>";
  menus += '<a class="menu-trigger">';
  menus += "<span>Menu</span>";
  menus += "</a>";
  menus += "<!-- ***** Menu End ***** -->";
  menus += "</nav>";

  document.getElementById("nav-placeholder").innerHTML = menus;

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
