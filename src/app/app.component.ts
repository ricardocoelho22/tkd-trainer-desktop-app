import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sections = [
    {
      title: 'Treino',
      img: 'training.jpg',
      buttons: [
        'Registar Presenças',
        'Editar Treino',
        'Nova Unidade de Treino'
      ]
    },
    {
      title: 'Atletas',
      img: 'team.jpg',
      buttons: [
        'Criar Atleta',
        'Editar Atleta',
        'Feedback do Atleta'
      ]
    },
    {
      title: 'Ginásio',
      img: 'dojang.jpg',
      buttons: [
        'Inventário de material',
        '',
        ''
      ]
    },
    {
      title: 'Planeamento',
      img: 'planning.jpeg',
      buttons: [
        'Exames',
        'Documentação',
        'Histórico de Exames'
      ]
    }
  ]
}
