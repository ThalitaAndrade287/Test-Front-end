function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    const userName = formData.get('name')
    const email = formData.get('email')
    const phone1 = formData.get('phone1')
    const phone2 = formData.get('phone2')

    const element = document.getElementById('formValues')
    element.innerHTML = `<p class="title-info"> Nome completo:</p>
    <p class="info-user"> ${userName}</p>
    <p class="title-info"> E-mail:</p>
    <p class="info-user"> ${email}</p>
    <p class="title-info"> Telefone 1:</p>
    <p class="info-user"> ${phone1} </p>
    <p class="title-info"> Telefone 2: </p>
    <p class="info-user"> ${phone2 ? phone2 : "Não informado"} </p>`

    const text = document.getElementById('paragraph')

    alert("Candidatura enviada com Sucesso")

    text.remove()

    event.target.reset()
}
