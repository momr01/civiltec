"use server";

import { blogItems } from "@/data/blogItems";

// import { Message } from "@/models/message";
// import { connectToDB } from "./db";

export const sendContactForm = async (formData: FormData) => {
  const { name, email, phone, message } = Object.fromEntries(formData);

  try {
    // Conectarse a la base de datos
    // await connectToDB();

    // Crear y guardar un nuevo mensaje
    // const newMsg = new Message({
    //   name,
    //   email,
    //   phone,
    //   content: message,
    // });

    // await newMsg.save();
    console.log(`${name} - ${email} - ${phone} - ${message}`);
    return { status: "success", message: "Mensaje enviado correctamente." };
  } catch (err: unknown) {
    console.log(err);
    return { status: "error", message: "Error al intentar enviar el mensaje." };
  }
};

export const fetchBlogItem = async (id: string) => {
  try {
    const blogItem = await blogItems.find((item) => item.id === id);
    return blogItem;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blog item!");
  }
};
