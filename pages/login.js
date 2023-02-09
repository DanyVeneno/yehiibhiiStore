import Layout from "../components/Layout";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function LoginScreen() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    //console.log(email, password);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Iniciar Sesión">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Iniciar Sesión</h1>
        <div className="mb-4">
          <label htmlForm="email">Correo Electronico</label>
          <input
            type="email"
            {...register("email", {
              required: "Por favor escribe un correo electronico valido",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email"
              }
            })}
            className="w-full rounded-sm h-10 p-5 "
            id="email"
            autofocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4 ">
          <label htmlForm="password">Escribe tu Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" }
            })}
            className="w-full rounded-sm h-10 p-5"
            id="password"
            autofocus
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="bg-gradient-to-r from-slate-800 to-emerald-500 hover:from-zinc-800 hover:to-lime-500 rounded-md p-3 w-full">
            Iniciar Sesión
          </button>
        </div>
        <div className="mb-4 ">
          Si no tienes cuenta creá una /&nbsp;
          <Link href={`/register?redirect=${redirect || "/"}`}>
            Registrate Aqui
          </Link>
        </div>
      </form>
    </Layout>
  );
}
