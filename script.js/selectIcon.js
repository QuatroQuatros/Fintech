function showSelectIcon() {
    var seletorIcones = document.getElementById('icons-list');
    var iconePreview = document.getElementById('iconsPreview')
    iconePreview.className = ""
    
    iconePreview.classList.add('fa-solid')
    iconePreview.classList.add(seletorIcones.value)


    console.log(seletorIcones.value)
}