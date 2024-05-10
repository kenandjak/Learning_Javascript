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
        if (fsex[0].checked){
            gênero = 'Feminino'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','imagens/baby_w.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imagens/young_w.png')
            } else if (idade < 50){
                // Adult
                img.setAttribute('src','imagens/adult_w.png')
            } else {
                // Idos
                img.setAttribute('src','imagens/old_w.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Masculino'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','imagens/baby_m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imagens/young_m.png')
            } else if (idade < 50){
                // Adult
                img.setAttribute('src','imagens/adult_m.png')
            } else {
                // Idos
                img.setAttribute('src','imagens/old_m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos pessoa do gênero ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

//alert("Olá")