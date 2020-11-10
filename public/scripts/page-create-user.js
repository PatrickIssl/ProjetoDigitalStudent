

// adicionar o campo de fotos

function addPhotoField(){
   //pegar o container de fotos #images

    const container = document.querySelector('#images')

   //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

   //realizar clone da ultima imagem adicionada

    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verifica se está vazio, se sim não adicionar ao container de imagens

    const input = newFieldContainer.children[0]

    if(input.value == ""){
        
        return
    }

    //limpar o campo
    input.value = ""
  
    //adicionar o clone ao container de #images

   container.appendChild(newFieldContainer)
    

}

//deleta campo de fotos
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
        
    }   

    //deletar o campo
    span.parentNode.remove();

}





  

