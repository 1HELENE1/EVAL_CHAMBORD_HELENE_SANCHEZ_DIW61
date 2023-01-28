window.onload = function (){

function desactivateTooltips (){
    const spans = document.getElementsByTagName('span');
    const spansLength = spans.length;
    
    for (let i=0;i<spansLength;i++) {
    if (spans[i].className =='tooltip') {
        spans[i].style.display = 'none';
    }
    }
    }
    function getTooltip (elemHTML) {
        while (elemHTML = elemHTML.nextSibling){
            if (elemHTML.className == 'tooltip') {
                return elemHTML;
            }
        }
        return false;
    }
    
    let check ={
    }
    
    // genre
    check['genre'] = function () {
        console.log('genre');
        let genre = document.getElementsByName(genre[1].parentNode);
        if(genre[0].checked || genre[1].checked || genre[2].checked) {
            tooltip.style.display = 'none';
            return true;
        } else {
            tooltip.style.display = 'inline-block';
            return false;
        }
    };
    // lastName
    check['lastName'] = function (id) {
        console.log('Check de lastName');
    
        let elemHTML = document.getElementById(id),
            tooltip = getTooltip(elemHTML);
    
        if (elemHTML.value.length >= 2) {
            elemHTML.className ='correct';
            tooltip.style.display = 'none';
            return true;
    
        } else{
            elemHTML.className = 'incorrect';
            tooltip.style.display = 'inline-block';
            return false;
        }
    };
    // firstName et mail
    check['firstName'] = check['lastName'] = check ['email']
    
    // age
    check['age'] = function () {
        console.log('age');
    
        let age = document.getElementById('age'),
        tooltip = getTooltip(age),
        ageValue = parseInt(age.value);
        
        if (ageValue >= 16 && ageValue <= 62){
            age.className = 'correct';
            tooltip.style.display='none';
            return true;
    
        }else {
            age.className = 'incorrect';
            tooltip.style.display='inline-block';
            return false;
            }
        };
    
    
    // metier
    check['metier'] = function () {
        console.log('metier');
        let metier = document.getElementById('metier'),
        tooltip=getTooltip(metier);
        
        if(metier.value !== "none") {
            tooltip.style.display = 'none';
    }else {
        tooltip.style.display = 'inline-block';
    }
    };
    // IIFE
    (function() {
    
        //form
    const myForm = document.getElementById('myForm');
    const listInputs = document.getElementsByTagName('input');
    const listInputsLength = listInputs.length;
    
    
    //onKeyup
    for(let i = 0; i < listInputsLength; i++) {
    
        if(listInputs[i].type == 'text' 
        || listInputs[i].type == 'email')
         {
            listInputs[i].onKeyup = function() {
            check[this.id](this.id);
            }
        }
    };
    
    //submit
    
    myForm.onsubmit=function(e) {
       
    }
    
    //reset
    myForm.onreset=function(e) {
    
    }
    desactivateTooltips ();
    
    }());


    // fin de la derniere parenthese
}