const del = document.getElementsByClassName('delete');
Array.from(del).forEach(delBtn => {
    delBtn.addEventListener('click', () => {
        const delId = delBtn.getAttribute("data-id");
        let urldel = `https://usertask-manger.herokuapp.com/api/users/${delId}`;
        fetch(urldel, {
            method: "DELETE"
        }).then(() => {
            console.log('Successfully deleted');
            location.reload();
        }).catch((err) => {
            console.log(err);
        })
    })
})