const submit = document.querySelector('#submit');

const checkInfo = async () => {
    const res = await fetch("http://127.0.0.1:5500/src/jsons/accounts.json");
    const data = await res.json();

    let User = document.querySelector('#username').value;
    let Pass = document.querySelector('#password').value;

    if (User === "" || Pass === "") {
        alert("Fill the form completely");
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i].username.includes(User) && data[i].password.includes(Pass)) {
                window.location.href = `http://127.0.0.1:5500/panels/${data[i].id}/dashboard.html`;
            }
        }
    }
};

submit.addEventListener('click', checkInfo);