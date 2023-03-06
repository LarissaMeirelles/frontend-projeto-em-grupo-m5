import React from 'react'

function formlogin() {
  return (
<section>
        <div class="lgp-hd">
            <h2><strong>Faça seu login aqui!</strong></h2>
        </div>
        <div class="container login-cont">
            <div class="row">
                <div class="col">
                    <section class="login-clean">
                        <form method="post" action="login.html">
                            <h2 class="sr-only">Sign in</h2>
                            <div class="illustration"><i class="icon ion-calculator"></i></div><a class="forgot" href="register.html"></a>
                            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
                            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Senha"/></div>
                            <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Acessar</button></div><a class="forgot mt-2" href="#">Esqueceu sua senha?</a><a class="forgot" data-toggle="" href="#">Inscreva-se</a>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </section>
  )
}

export default formlogin