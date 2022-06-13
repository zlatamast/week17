function checkInput() {
    let fillInput = document.querySelector('#fillInput');

    if (fillInput.value == '') {
        return fillInput.value
    }

    let fillInput1 = fillInput.value.trim().toLowerCase();


    let arr = [];

    arr = fillInput1.split(' ');


    let surname = arr[0][0].toUpperCase()+ arr[0].slice(1);
    let name = arr[1][0].toUpperCase()+ arr[1].slice(1);
    let middleName = arr[2][0].toUpperCase()+ arr[2].slice(1);


    document.querySelector('#fio').innerHTML=`
    <label for="surname">Фамилия:<input value='${surname}' type="text" id="surname"></label> <br>
    <label for="name">Имя:<input value='${name}' type="text" id="name"></label> <br>
    <label for="middleName">Отчество:<input value='${middleName}' type="text" id="middleName"></label> <br>
    `
}

document.querySelector('#forward').addEventListener('click', checkInput);



