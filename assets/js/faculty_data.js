let facultyDetails = [
    {
        id:"cs1",
        name: "Er. Mohanjeet Kaur",
        designation: "Lecturer",
        graduation: "B.Tech. (Computer Engg.)",
        postgraduation: "M.Tech. (Computer Engg.)"
    },
    {
        id:"cs2",
        name: "Mohanjeet Kaur",
        designation: "Lecturer",
        graduation: "B.Tech. (Computer Engg.)",
        postgraduation: "M.Tech. (Computer Engg.)"
    }
];

for(var i=0; i<facultyDetails.length; i++){
    let card ='<div class="col">';
    card +='<div class="col-md-4 col-sm-6">';
    card +='<div class="card-container">';
    card +='<div class="card">';
    card +='<div class="front">';
    card +='<!-- <div class="cover">';
    card +='<img src="assets/images/rotating_card_thumb2.png"/>'
    card +='</div> -->';
    card +='<div class="user">';
    card +='<img class="img-circle" src="assets/images/cse/mohanjeet.jpg"/>';
    card +='</div>';
    card +='<div class="content">';
    card +='<div class="main">';
    
    var fac= facultyDetails[i];
    for(var key in fac){

        card +='<h3 class="name">'+fac["name"]+'</h3>';
        card +='<p class="profession">'++'</p>';
                                   <!-- <p class="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p> -->
                               </div>
                               <!-- <div class="footer">
                                   <i class="fa fa-mail-forward"></i> Auto Rotation
                               </div> -->
                           </div>
                       </div> <!-- end front panel -->
                       <div class="back">
                           <!-- <div class="header">
                               <h5 class="motto">"To be or not to be, this is my awesome motto!"</h5>
                           </div> -->
                           <div class="content">
                               <div class="main">
                                   <h4 class="text-center">Qualification</h4>
                                   <p class="text-center">B.Tech(Computer Engg), M.Tech(Computer Engg)</p>
     
                                   <div class="stats-container">
                                       <div class="stats">
                                           <h4>235</h4>
                                           <p>
                                               Followers
                                           </p>
                                       </div>
                                       <div class="stats">
                                           <h4>114</h4>
                                           <p>
                                               Following
                                           </p>
                                       </div>
                                       <div class="stats">
                                           <h4>35</h4>
                                           <p>
                                               Projects
                                           </p>
                                       </div>
                                   </div>
     
                               </div>
                           </div>
                           <div class="footer">
                               <div class="social-links text-center">
                                   <a href="https://creative-tim.com" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                                   <a href="https://creative-tim.com" class="google"><i class="fa fa-google-plus fa-fw"></i></a>
                                   <a href="https://creative-tim.com" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
                               </div>
                           </div>
                       </div> <!-- end back panel -->
                   </div> <!-- end card -->
               </div> <!-- end card-container -->
           </div> <!-- end col sm 3 -->
     <!--         <div class="col-sm-1"></div> -->
         
           </div>
        
    }
}