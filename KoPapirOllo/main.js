let eredmenyek = ["Sajnos vesztettél.", "Ez most döntetlen, válassz újra!", "Gratulálok, nyertél!!!"];
let nyert = 0, dontetlen = 0; vesztett = 0;
const lehetoseg = {0: "ko", 1: "papir", 2: "ollo"}

function Ko(){
    JatekosValasz = 0;
    removeSelection();
    document.getElementById("ko").style.border = "thick solid #0000FF";
    kiertekeles(JatekosValasz);
}
function Papir(){
    JatekosValasz = 1;
    removeSelection();
    document.getElementById("papir").style.border = "thick solid #0000FF";
    kiertekeles(JatekosValasz);
}
function Ollo(){
    JatekosValasz = 2;
    removeSelection();
    document.getElementById("ollo").style.border = "thick solid #0000FF";

    kiertekeles(JatekosValasz);
}

function removeSelection(){
    document.getElementById("papir").style.border = "";
    document.getElementById("ollo").style.border = "";
    document.getElementById("ko").style.border = "";
    
}

function kiertekeles(JatekosValasz){
    
    let veletlen = Math.floor(Math.random() * 3);

    switch(veletlen){
        case 0:
            document.getElementById("veletlenKep").setAttribute("src", "ko.png");
            break;
        
        case 1:
            document.getElementById("veletlenKep").setAttribute("src", "papir.png");
            break;

        case 2:
            document.getElementById("veletlenKep").setAttribute("src", "ollo.png");
            break;
            
    }

    document.getElementById("veletlenKep").setAttribute("style", "visibility: visible");

    if(JatekosValasz == veletlen){
        dontetlen++;
        eredmenySzoveg = eredmenyek[1];
    }

    else if(JatekosValasz == 0 && veletlen == 1){
        vesztett++;
        eredmenySzoveg = eredmenyek[0];
    }

    else if(JatekosValasz == 0 && veletlen == 2){
        nyert++;
        eredmenySzoveg = eredmenyek[2];
    }

    else if(JatekosValasz == 1 && veletlen == 0){
        nyert++;
        eredmenySzoveg = eredmenyek[2];
    }

    else if(JatekosValasz == 1 && veletlen == 2){
        vesztett++;
        eredmenySzoveg = eredmenyek[0];
    }

    else if(JatekosValasz == 2 && veletlen == 0){
        vesztett++;
        eredmenySzoveg = eredmenyek[0];
    }

    else if(JatekosValasz == 2 && veletlen == 1){
        nyert++;
        eredmenySzoveg = eredmenyek[2];
    }

    document.getElementById("eredmenySzoveg").innerText = eredmenySzoveg;
    document.getElementById("NyertKör").innerText = nyert;
    document.getElementById("DöntetlenKör").innerText = dontetlen;
    document.getElementById("VesztettKör").innerText = vesztett;

    


}

function ujra(){

    document.getElementById("veletlenKep").setAttribute("style", "visibility: hidden");

    document.getElementById("eredmenySzoveg").innerText = "";
    
    removeSelection();

    nyert=0;
    vesztett=0;
    dontetlen=0;

    document.getElementById("NyertKör").innerText = nyert;
    document.getElementById("DöntetlenKör").innerText = dontetlen;
    document.getElementById("VesztettKör").innerText = vesztett;
}