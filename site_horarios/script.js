function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora < 12){
        //Bom dia
        img.scr = 'morning.jpg'
        document.body.style.background = '#ebe400'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.scr = 'afternoon.jpg'
        document.body.style.background = '#0ec40e'
    } else{
        //Boa noite
        img.scr = 'night.jpg'
        document.body.style.background = '#1c13c2'
    }
}

//scr="./LEARNING_JAVASCRIPT/site_horarios/morning.jpg"