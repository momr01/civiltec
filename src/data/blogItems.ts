import {
  proyectoBeth01,
  proyectoBeth02,
  proyectoBeth03,
  proyectoBeth04,
  proyectoBeth05,
  proyectoBeth06,
} from "@/assets/img/blog/proyectoBeth/imgProyectoBeth";
import {
  sistemaConstructivo01,
  sistemaConstructivo02,
  sistemaConstructivo03,
  sistemaConstructivo04,
} from "@/assets/img/blog/sistemaConstrutivo/imgSistemaConstructivo";
import {
  soporteElectrico01,
  soporteElectrico02,
  soporteElectrico03,
} from "@/assets/img/blog/soporteElectrico/imgSoporteElectrico";

const blogItems = [
  {
    id: "1056ghcb45hsbnm5609j",
    order: 1,
    title: "proyecto beth - casa modular",
    description: `Las casas modulares originalmente no cubrían las necesidades de todos, siendo casas pequeñas y con medidas insuficientes.
Civiltec diseño la casa modular expandible, ahorran tiempo de obra, materiales, energía, sedentarismo, con productos sustentables, ecológicos y duraderos. Es una vivienda amplia para toda la familia, con grandes dimensiones, puede ser transportada y colocada en el día.
La tecnología utilizada, es un mecanismo nuevo, novedoso y que incorporamos gracias al proyecto de profesionales dedicados al avance en la construcción. 
Civiltec modulares se expande, una vez que llega a obra, la misma se transforma en una vivienda familiar.
`,
    images: [
      proyectoBeth01,
      proyectoBeth02,
      proyectoBeth03,
      proyectoBeth04,
      proyectoBeth05,
      proyectoBeth06,
    ],
    video: "/video/blog/proyectoBethVideo.mp4",
    createdAt: "2024-09-02T13:51:16.913+00:00",
  },
  {
    id: "hjetnb78cd001jmdb5gg",
    order: 2,
    title: "sistema constructivo muros beth",
    description: `Civiltec diseño, creo y puso en práctica el sistema Beth, muros de encofrado perdido. 
Estos, ahorran tiempo, energía, siendo también sustentables, ecológicos, acústicos, térmicos y resistentes. Incorporando beneficios sin dejar de lado la durabilidad del ladrillo ya que son muros de hormigón, creados in situ, generando una alta resistencia, y eliminando tiempos perdidos.
`,
    images: [
      sistemaConstructivo01,
      sistemaConstructivo02,
      sistemaConstructivo03,
      sistemaConstructivo04,
    ],
    video: "/video/blog/sistemaConstrutivoVideo.mp4",
    createdAt: "2024-09-02T13:51:16.913+00:00",
  },
  {
    id: "mnmmldgh56m3450mstgc",
    order: 3,
    title: "soporte eléctrico",
    description: `En el área de la metalmecánica, oleoductos y empresas de energía, diseñamos los soportes de alimentación energética. Este diseño cubrió las necesidades de nuestros clientes, los mismos debían ser colocados de forma rápida y eficiente.
Civiltec los proyecto con el objetivo de no romper ni afecta el área de transformadores, logrando una reducción de tiempo y generando un nuevo dispositivo brindando una alternativa y solución eficaz.
`,
    images: [soporteElectrico01, soporteElectrico02, soporteElectrico03],
    video: "/video/blog/soporteElectricoVideo.mp4",
    createdAt: "2024-09-02T13:51:16.913+00:00",
  },
];

export { blogItems };
