const handleLogin = (loginMethod) => {
  // loginFacebook("facebook");

  auth
    .signInWithPopup(loginMethod)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;

      setToken(token);
      setUser(user);
      router.push("/");
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
