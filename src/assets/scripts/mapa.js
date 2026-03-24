import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const iconoGastronomico = L.divIcon({
  className: '',
  html: `
    <div style="
      background-color: #f40101;
      width: 36px;
      height: 36px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
    </div>
  `,
  iconSize: [20, 20],
  iconAnchor: [18, 36],
  popupAnchor: [0, -38]
});

const mapa = L.map('mapa').setView([38.543393, -0.116833], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

const paradas = [
  { nombre: "D-vora Restaurante", coords: [38.53438, -0.13065], descripcion: "Si buscas comer bien con unas vistas inmejorables, este es tu sitio. Su terraza suspendida sobre el mar es el escenario perfecto para probar platos mediterráneos con un toque moderno y muy atrevido." },
  { nombre: "La Mejillonera", coords: [38.53663, -0.13019], descripcion: "Ruido, alegría y un ritmo frenético. Esta mítica parada es el paraíso del tapeo informal en Benidorm. Un sitio donde mancharse las manos comiendo marisco a precios populares es casi una obligación." },
  { nombre: "Casa Toni", coords: [38.54022, -0.11728], descripcion: "El paraíso para los amantes de la materia prima sin disfraces. Un local que lo apuesta todo a la calidad del producto: excelentes carnes a la brasa y marisco fresco traído directamente de la lonja." },
  { nombre: "Bar Mariano´s", coords: [38.53613, -0.10772], descripcion: "El local salvavidas de Benidorm. Da igual si vas a comer al mediodía con la familia o a recenar de madrugada; su ambiente es único y siempre te vas con el estómago lleno y una sonrisa." },
  { nombre: "Restaurante La Señoría", coords: [38.53465, -0.13116], descripcion: "Escondido en el casco histórico, es un rincón perfecto para relajarse y huir del bullicio. Sus tapas y raciones combinan genial con una sobremesa tranquila y un buen vino de la zona." },
  { nombre: "Kinzo Sushi - Benidorm", coords: [38.54012, -0.12591], descripcion: "El contrapunto exótico de nuestra ruta. Si te apetece cambiar de aires, aquí encontrarás comida japonesa elaborada con una técnica impecable, fusionada con pescados locales fresquísimos." },
  { nombre: "Restaurant Arrocería La Marina", coords: [38.5496, -0.10662], descripcion: "Ir a la Costa Blanca y no comer un buen arroz es un delito, y aquí preparan algunos de los mejores. Capa finísima en la paella, socarrat en su punto exacto y muchísimo sabor a mar." },
  { nombre: "Carmencita Brunch", coords: [38.53765, -0.12168], descripcion: "Si estás buscando el mejor brunch en Benidorm, Carmencita es conocido por su auténtico menú de brunch americano, su ambiente relajado y su trato cercano." },
  { nombre: "Mos", coords: [38.53641, -0.12976], descripcion: "La opción perfecta para coger fuerzas por la mañana o hacer una pausa más ligera. Un local moderno y desenfadado donde el pan de verdad y las opciones saludables son las estrellas." },
];

const puntos = paradas.map(parada => {
  return L.marker(parada.coords, { icon: iconoGastronomico })
    .addTo(mapa)
    .bindPopup(`<b>${parada.nombre}</b><br>${parada.descripcion}`);
});