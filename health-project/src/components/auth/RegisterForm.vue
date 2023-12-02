<template>
  <form @submit.prevent="register">
    <h3 id="logo">Bienvenido</h3>
    <label for="username">Nombre de usuario</label>
    <input v-model="username" type="text" id="username" name="username" placeholder="Ingresa tu nombre de usuario" autocomplete="off" required />
    <label for="email">Correo electrónico</label>
    <input v-model="email" type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" autocomplete="off" required />
    <label for="password">Contraseña</label>
    <input v-model="password" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" autocomplete="off" required />
    <label for="confirmPassword">Confirmar contraseña</label>
    <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirma tu contraseña" autocomplete="off" required />
    <router-link to="/iniciarsesion" class="signin">Ya tengo una cuenta</router-link>
    <input type="submit" name="submit" value="Registrarse" />
  </form>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Lily+Script+One);

body {
  margin: 0;
  font-family: arial, tahoma, sans-serif;
  font-size: 12px;
  font-weight: normal;
  direction: ltr;
  background: white;
}

form {
  margin: 10% auto 0 auto;
  padding: 30px;
  width: 400px;
  height: auto;
  overflow: hidden;
  background: white;
  border-radius: 10px;
}

form label {
  font-size: 14px;
  color: darkgray;
  cursor: pointer;
}

form label,
form input {
  float: left;
  clear: both;
}

form input {
  margin: 15px 0;
  padding: 15px 10px;
  width: 100%;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 20px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

form input[type=text]:focus,
form input[type="password"]:focus {
  border-color: cornflowerblue;
}

input[type=submit] {
  padding: 15px 50px;
  width: auto;
  background: #1abc9c;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  float: right;
  clear: right;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

input[type=submit]:hover {
  opacity: 0.8;
}

input[type="submit"]:active {
  opacity: 0.4;
}

.forgot,
.signin {
  margin: 10px;
  float: left;
  clear: left;
  display: inline-block;
  color: cornflowerblue;
  text-decoration: none;
}

.forgot:hover,
.signin:hover {
  color: darkgray;
}

#logo {
  margin: 0 auto;
  width: 200px;
  font-family: 'Lily Script One', cursive;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: lightgray;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

#logo:hover {
  color: cornflowerblue;
}

</style>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    register() {
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Confirm Password:', this.confirmPassword);
      axios.post('/api/register', { username: this.username, email: this.email, password: this.password })
      .then(response => {
           // Manejar la respuesta del servidor
         })
         .catch(error => {
           // Manejar errores
         });
    },
  },
};
</script>
