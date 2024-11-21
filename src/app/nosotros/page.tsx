import { us01, us02 } from "@/assets/img/us/us";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const UsPage = () => {
  return (
    <section className="pt-64">
      <h2 className="uppercase text-mainBlue font-bold text-3xl text-center">
        sobre nosotros
      </h2>
      <div className="my-14 grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-16">
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
        <p className="text-lg text-justify leading-8 font-medium tracking-widest mt-16">
          Nuestros modelos son personalizados, ya que contamos con una oficina
          de Arquitectura por lo que diseñamos la casa que siempre soñaste según
          tus necesidades.
        </p>
        <div className="grid grid-cols-2 mt-14">
          <div className="">
            <div className="flex gap-10 items-center px-5 mb-5">
              <FaCheckCircle size={40} />
              <p className="text-lg tracking-widest leading-8">Hacemos la documentación y trámites municipales.</p>
            </div>
            <div>Construimos gestionando todos los recursos.</div>
          </div>
          <div>
            <div>Realizamos la dirección técnica.</div>
            <div>
              Tenemos facilidades de pago y precios muy competitivos en el
              mercado.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsPage;
