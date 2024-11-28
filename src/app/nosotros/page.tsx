import { us01, us02, us03, us04 } from "@/assets/img/us/us";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CheckedList from "../ui/us/checkedList/checkedList";
import { choseUsList } from "@/data/choseUsList";
import {
  logoArquitectura,
  logoIngenieria,
  logoConstruccion,
} from "@/assets/img/services/imgLogoServices";
import { GoDotFill } from "react-icons/go";

const UsPage = () => {
  return (
    <section className="lg:pt-64 pt-40">
      <h2 className="uppercase text-mainBlue font-bold text-3xl text-center">
        sobre nosotros
      </h2>
      <div className="lg:my-14 grid lg:grid-cols-2 lg:gap-20 gap-5 my-8">
        <div className="flex flex-col lg:gap-16 gap-8">
          <p className="text-lg text-justify leading-8 font-medium tracking-widest">
            Aplicamos la tecnología, la suma de habilidades, métodos y procesos
            que nos permitan Diseñar, Crear y Construir tus objetivos con apoyo
            técnico desde el inicio del proyecto. Buscando satisfacer las
            necesidades de nuestros clientes, optimizando y generando valor
            agregado a los proyectos que realizamos.
          </p>
          <Image src={us01} alt="us01" />
        </div>

        <Image src={us02} alt="us02" className="h-[630px] w-auto" />
      </div>
      <div className="mt-52">
        <h2 className="uppercase text-mainBlue font-bold text-3xl">
          ¿por qué elegirnos?
        </h2>
        <p className="text-lg text-justify leading-8 font-medium tracking-widest lg:mt-16 mt-7">
          Nuestros modelos son personalizados, ya que contamos con una oficina
          de Arquitectura por lo que diseñamos la casa que siempre soñaste según
          tus necesidades.
        </p>
        <div className="grid lg:grid-cols-2 lg:mt-14 mt-7">
          {choseUsList.map((item, index) => (
            <CheckedList key={index} description={item.content} />
          ))}
        </div>
        <div className="grid grid-cols-2 lg:gap-10 gap-3 lg:mt-20 mt-10">
          <Image src={us03} alt="us03.jpg" />
          <Image src={us04} alt="us04.jpg" />
        </div>
      </div>

      <div className="mt-52">
        <h2 className="uppercase text-mainBlue font-bold text-3xl">
          servicio creativo
        </h2>
        <p className="text-lg text-justify leading-8 font-medium tracking-widest lg:mt-16 mt-7 uppercase">
          todo comienza con una idea, ¡con tu idea!
        </p>
        <div className="flex lg:justify-between flex-col lg:flex-row lg:mt-16 mt-8 lg:mb-52 mb-32 gap-5 lg:gap-0">
          {servicesList.map((item, index) => (
            <CreativeService key={index} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsPage;

const servicesList = [
  {
    id: 1,
    title: "arquitectura",
    items: [
      "Proyecto.",
      "Modelado 3D y Renderizado de imágenes.",
      "Confección de planos.",
      "Seguimiento de expedientes municipales.",
    ],
    logo: logoArquitectura,
  },
  {
    id: 2,
    title: "ingeniería",
    items: [
      "Proyecto estructural.",
      "Cálculos civiles.",
      "Cálculos de oleoductos, gaseoductos y electromecánicos.",
    ],
    logo: logoIngenieria,
  },
  {
    id: 3,
    title: "construcción",
    items: [
      "Obras de pequeña, mediana y gran escala.",
      "Dirección técnica.",
      "Administración de recursos.",
    ],
    logo: logoConstruccion,
  },
];

interface IServiceItem {
  id: number;
  title: string;
  items: string[];
  logo: StaticImageData;
}

const CreativeService = ({ service }: { service: IServiceItem }) => {
  return (
    <div className="flex bg-gray-300 lg:w-[390px] rounded-2xl p-3 gap-3">
      <div>
        <Image
          src={service.logo}
          alt={`${service.id}-${service.title}`}
          className="w-24"
        />
      </div>
      <div>
        <h3 className="uppercase font-bold text-xl mb-4">{service.title} </h3>
        <ul>
          {service.items.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-2">
                <div>
                <GoDotFill size={10} />
                </div>
             
                <span className="text-base">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
