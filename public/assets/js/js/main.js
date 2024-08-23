
const inputImage = document.querySelector('.inputImage');
const imageName = document.querySelector('.imageName');
const partyLogo = document.querySelector('#file');
const partyName = document.querySelector('#party-name');
const btn = document.querySelector('#submit');

//display image name uponload
document.addEventListener('DOMContentLoaded', () => {
    
    inputImage.addEventListener('change', () => {
        if(inputImage.files.length > 0){
            imageName.textContent = inputImage.files[0].name
        }else{
            imageName.textContent = 'Choose image'
        }
    })

    btn.addEventListener('click', (e) => {
        // e.preventDefault();
        if(partyName.value == '' || partyName.value == null){
            if(partyLogo.value === '' || partyLogo == null){
                console.log('Error uploading party logo')
            }
        }
        console.log('Error uploading party name');
    })

});
