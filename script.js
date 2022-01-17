// function activatePosition(){
    
//     $( '.navbar-nav a' ).on( 'click', function () {
//         $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
//         $( this ).parent( 'li' ).addClass( 'active' );
//     });
    
// }

function change(){
    $(".nav li").on("click", function() {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });
}


var angle = 0;


function rotateCarousel(sign){

    spinner=document.getElementById("carousel");
    
    if(!sign){
        angle = angle - 60
        
    }else{ 
        angle = angle + 60
        
    }
    
    
    spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
}

function chooseOne(id){
    let test = document.getElementById('big-project');
    console.log(id);
    
    test.style.display = "flex";
    test.scrollIntoView({behavior:"smooth"});
    displayBig(id);
}

function displayBig(id){
    console.log(id);
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            console.log(data[id].name);
            // On injecte le titre.
            document.getElementById("title-project").innerHTML = data[id].name;
            
            // On injecte le context.
            document.getElementById("context").innerHTML = data[id].context;

            // On injecte les technologies.
            document.getElementById("technologie").innerHTML = data[id].tech;

            // On injecte le lien github.
            document.getElementById("github").href = data[id].github;

            // Récupération description.
            document.getElementById("description").innerHTML = data[id].description;
            
            
            // // Récupération how_work.
            // fetch(data[id].path+'text/how_work'+terminaison[lang]+'.txt')
            //     .then(response => response.text())
            //     .then(desc => {document.getElementById('work-pro-text').innerHTML = desc; });
            
            // // Récupération how_use.
            // fetch(data[id].path+'text/how_use'+terminaison[lang]+'.txt')
            //     .then(response => response.text())
            //     .then(desc => {document.getElementById('use-pro-text').innerHTML = desc; });

        });
}

function chooseOneSelect(){
    let angle_fun = angle%360;
    let id =0;
    console.log('ok',angle, angle_fun);
    if((Math.abs(angle_fun)==0)||(Math.abs(angle_fun)==360)){
        console.log('cas1 ok');
        id=1;
    }else if((angle_fun==60)||(angle_fun==-300)){
        console.log('cas2 ok');
        id=2;
    }else if((angle_fun==120)||(angle_fun==-240)){
        console.log('cas3 ok');
        id=3;
    }else if((Math.abs(angle_fun)==180)){
        console.log('cas4 ok');
        id=4;
    }else if((angle_fun==240)||(angle_fun==-120)){
        console.log('cas5 ok');
        id=5;
    }else if((angle_fun==300)||(angle_fun==-60)){
        console.log('cas6 ok');
        id=6;
    }else{
        console.log('error');
    }
    chooseOne(id);

    
    
}


function mouseOver() {

    let test = document.getElementsByClassName("fas fa-envelope");
    $(test).attr('class','fas fa-envelope-open');

}

function mouseOut() {

    let test = document.getElementsByClassName("fas fa-envelope-open");
    $(test).attr('class','fas fa-envelope');

}

function magic(){

    let test = document.getElementById('contact_me');
    
    test.scrollTo(0, 2000);

}
    
