function verificar(){
    //window.alert('Verificado')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        if (fsex[0].checked) gênero = 'Feminino';
        else gênero = 'Masculino';

        if(idade >= 0 && idade < 3){
            // Bebê
            img.setAttribute('src',`imagens/${gênero}/baby.png`)
        } else if (idade < 12){
            // Criança
            img.setAttribute('src',`imagens/${gênero}/child.png`)
        }else if (idade < 19 ){
            // Adolescente
            img.setAttribute('src',`imagens/${gênero}/teen.png`)
        } else if (idade < 30) {
            // Jovem
            img.setAttribute('src',`imagens/${gênero}/young.png`)
        } else if (idade < 60){
            // Adult
            img.setAttribute('src',`imagens/${gênero}/adult.png`)
        } else {
            // Idos
            img.setAttribute('src',`imagens/${gênero}/old.png`)
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do gênero ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

//alert("Olá")