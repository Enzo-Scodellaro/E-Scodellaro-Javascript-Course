export default function login(userBtn){
  const d = document;


  d.addEventListener("click", (e) => {
    if(e.target.matches(userBtn)|| e.target.matches(`${userBtn} *`)){
        Swal.fire({
            title: 'Inicio de Sesión',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
            <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
            confirmButtonText: 'Iniciar Sesión',
            focusConfirm: false,
            confirmButtonColor: '#FF8300',
            preConfirm: () => {
              const login = Swal.getPopup().querySelector('#login').value
              const password = Swal.getPopup().querySelector('#password').value
              if (!login || !password) {
                Swal.showValidationMessage(`Please enter login and password`)
              }
              return { login: login, password: password }
            }

          }).then((result) => {
            Swal.fire(`
              Login: ${result.value.login}
              Password: ${result.value.password}
            `.trim())
          })
          
          
    }
})
}


