function sendComment() {
    let comment = document.querySelector('#comment');

    if (comment.value == '') {
        return comment.value
    }

    let checkedComment = comment.value.replace(/виагра|xxx/gi, "***");

    document.querySelector('#showComments').innerHTML += `<div>${checkedComment}</div>`
    
    comment.value = '';
}

document.querySelector('#send').addEventListener('click', sendComment);

