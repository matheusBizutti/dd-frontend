import { Component, OnInit } from '@angular/core';

import { ThfPageLogin, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customLiterals: ThfPageLoginLiterals = {
    title: 'Seja bem-vindo ao Portal',
    loginErrorPattern: 'Login obrigatório',
    loginPlaceholder: 'Insira seu usuário de acesso',
    passwordErrorPattern: 'Senha obrigatória',
    passwordPlaceholder: 'Insira sua senha de acesso',
    rememberUser: 'Lembrar usuário',
    submitLabel: 'Entrar',
    registerUrl: 'Novo cadastro',
    forgotPassword: 'Esqueceu sua senha?',
    highlightInfo: 'A melhor solução de desconto em duplicatas.',
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn(formData: ThfPageLogin) {

    localStorage.setItem('token', 'tokenaccess');
    console.log(formData);
    this.router.navigate(['home/discounts']);

  }
}
