const submit = document.getElementById("submit")

submit.addEventListener('click', function(event) {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    alert(`Terima kasih, ${name.value}!. Pesanmu: "${message.value}", akan diteruskan ke Karisma. Mohon tunggu balasannya di ${email.value}.`)

    name.value = ""
    email.value = ""
    message.value = ""
})
