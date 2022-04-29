(function (global) {
    
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var labels;
    
    for(var i = 0; i < radioButtons.length; i++){
        radioButtons[i].onmousedown = StoreOldStatus;
        radioButtons[i].onclick = ToggleRadioButton;
        
        if(radioButtons[i].getAttribute('id')){
            labels = document.querySelectorAll('label[for="' + radioButtons[i].getAttribute('id') + '"]');
            for(var j = 0; j < labels.length; j++){
                labels[j].onmousedown = StoreOldStatus;
                labels[j].onclick = ToggleRadioButton;
            }
        }
    }
    
    function GetRadioButton(e){
        if(e.target.tagName.toLowerCase() === 'input'){
            return e.target;
        }
        if(e.target.tagName.toLowerCase() === 'label'){
            return document.getElementById(e.target.getAttribute('for'));
        }
    }
    
    function StoreOldStatus(e){
        let rB = GetRadioButton(e);
        rB.dataset.checked = rB.checked;
    }
    
    function ToggleRadioButton(e){
        let rB = GetRadioButton(e);
        if(rB.dataset.checked === 'true'){
            var reset = document.createElement('input');
            reset.setAttribute('type', 'radio');
            reset.setAttribute('name', e.target.getAttribute('name'));
            rB.parentElement.appendChild(reset);
            reset.click();
            rB.parentElement.removeChild(reset);
        }
    }
    
}(window));
