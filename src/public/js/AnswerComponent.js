const componentMake = document.querySelector(".action__component-make");
const componentShare = document.querySelector(".action__component-share");


async function getData(url = '', data = {}) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

const moveBtn = async () => {
    location.href = '/';
}
const shareBtn = async () => {
    let url = '';
    const textarea = document.createElement('textarea');

    document.body.appendChild(textarea);
    url = window.document.location.href;
    const sendUrl = url + "/share";

    let questionId = await getData(sendUrl);
    const returnUrl = window.document.location.origin+"/question/"+questionId.questionId;
    textarea.value = returnUrl;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

if(componentMake){
    componentMake.addEventListener("click", moveBtn);
}
if(componentShare){
    componentShare.addEventListener("click", shareBtn);
}