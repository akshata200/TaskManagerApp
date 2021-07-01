const del = document.getElementsByClassName('delete');
Array.from(del).forEach(delBtn => {
    delBtn.addEventListener('click', () => {
        const delId = delBtn.getAttribute("data-id");
        let urldel = process.env.FETCH_TASKS_BY_EMAIL + `/api/users/${delId}`;
        console.log(delId);
        fetch(urldel, {
            method: "DELETE",
        }).then(() => {
            console.log('Successfully deleted');
            location.reload();
        }).catch((err) => {
            console.log(err);
        })
    })
})