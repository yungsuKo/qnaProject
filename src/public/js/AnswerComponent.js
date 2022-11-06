const componentMake = document.querySelector(".action__component-make");

const clickActivated = async () => {
    console.log('clicked!');
}
if(componentMake){
    componentMake.addEventListener("click", clickActivated);
}