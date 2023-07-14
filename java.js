
function showclick() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
};
function closebtn() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
};




const divitem = document.querySelector('.pera');
let isClicked = true;
let tap = function tap(){
    if(isClicked){
        document.querySelector('.pera').style.display ='block';
        isClicked =false;
    }else{
        document.querySelector('.pera').style.display ='none';
        isClicked =true;
    }
};



