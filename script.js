imgP =  document.getElementById('imgprojetos')

function GIFU()
{
    imgP.classList.add('GIFU')
    imgP.classList.remove('BELARA','BITMAP','TULEN','MASCARAS')
}

function BELARA()
{
    imgP.classList.add('BELARA')
    imgP.classList.remove('GIFU','BITMAP','TULEN','MASCARAS')
}

function BITMAP()
{
    imgP.classList.add('BITMAP')
    imgP.classList.remove('GIFU','BELARA','TULEN','MASCARAS')
}

function TULEN()
{
    imgP.classList.add('TULEN')
    imgP.classList.remove('GIFU','BELARA','BITMAP','MASCARAS')
}

function MASCARAS()
{
    imgP.classList.add('MASCARAS')
    imgP.classList.remove('GIFU','BELARA','TULEN','BITMAP')

}

function irParaPagina() {

    if(imgP.classList.contains('GIFU'))
    { window.location.href = "https://enderluckg.github.io/GIFU/";}
    else if(imgP.classList.contains('BELARA'))
    { window.location.href = "https://lucassalman.github.io/Belara/";}
    else if(imgP.classList.contains('BITMAP'))
    { window.location.href = "https://lucassalman.github.io/BITMAAP/";}
    else if(imgP.classList.contains('TULEN'))
    { window.location.href = "https://lucassalman.github.io/Tulen/"}
    else if(imgP.classList.contains('MASCARAS'))
    { window.location.href = "https://enderluckg.github.io/Treino-Mascaras/";}
    
 

}

function dark() {
    document.body.classList.toggle('darkmode')
}
