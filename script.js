function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    //let hora =  data.getHours()
    let hora = 14
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if(hora >= 0 && hora <= 12){
        //bom dia
        img.src = 'dia.jpg'
        document.body.style.background = '#F0E68C'
    } else if(hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#00FFFF'
    } else {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#483D8B'
    }
}