import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  tarjetas:any[] = [
    { id: 1, texto: "Disfruta de nuestra exclusiva selección de cócteles preparados por expertos mixólogos.", tiempo: "5 mins" },
    { id: 2, texto: "Prueba nuestras hamburguesas gourmet con ingredientes frescos y de la mejor calidad.", tiempo: "7 mins" },
    { id: 3, texto: "Cada viernes tenemos música en vivo con las mejores bandas locales. ¡No te lo pierdas!", tiempo: "12 mins" },
    { id: 4, texto: "Nuestra carta de vinos incluye opciones nacionales e internacionales para todos los gustos.", tiempo: "9 mins" },
    { id: 5, texto: "Experimenta una fusión única de sabores con nuestros platos inspirados en la cocina internacional.", tiempo: "8 mins" },
    { id: 6, texto: "Los miércoles son de 2x1 en cervezas artesanales. ¡Ven con tus amigos a disfrutar!", tiempo: "6 mins" },
    { id: 7, texto: "Reserva una mesa para celebraciones especiales y disfruta de una experiencia inolvidable.", tiempo: "10 mins" },
    { id: 8, texto: "No te vayas sin probar nuestros postres caseros, el toque dulce perfecto para tu noche.", tiempo: "7 mins" },
    { id: 9, texto: "Ambiente cálido y acogedor con una decoración moderna que te hará sentir como en casa.", tiempo: "4 mins" }
  ];
}

