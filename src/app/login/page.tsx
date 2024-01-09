"use client";
import styles from "./loginPage.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { LOGIN_REQUEST } from "@/common/actions/auth";
import Image from "next/image";

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    ///Users/phamthanh/Documents/GitHub/driver-manager-web/public/assets/logo_app_1 1.svg
    <div className="flex justify-evenly items-center bg-white mt-20"
    style={{ 
      backgroundImage: `url('/assets/bg.svg')`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="absolute top-0 left-0 p-4 flex items-center">
        <img src="/assets/logo_app_1 1.svg" alt="Logo" className="h-8 mr-2" />{" "}
        {/* Adjust the h-8 class to size your logo appropriately */}
        <h1 className="text-green-500 uppercase font-bold">Driver Manager</h1>
      </div>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          dispatch({ type: LOGIN_REQUEST, payload: values });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white border-solid rounded-2xl border-login shadow-xl shadow-green-100 mix-blend-darken px-8 pt-6 pb-8 mb-4 mt-10">
            <h1 className="text-black font-bold text-2xl my-5">Đăng nhập</h1>
            <div className="mb-4 mt-9">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              ></label>
              <div className="inline-flex text-sm appearance-none border-b-2 border-login w-full pb-2 text-gray-300 leading-tight focus:outline-none focus:shadow-outline">
                <Image
                  className=""
                  src={require("/public/assets/Icon.png")}
                  width={17}
                  height={17}
                  alt="Username"
                ></Image>
                <Field
                  placeholder="Tài khoản"
                  id="username"
                  name="username"
                  type="text"
                  className="focus:outline-none ml-2"
                />
              </div>

              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="my-10">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              ></label>
              <div className="inline-flex text-sm appearance-none border-b-2 border-login w-full pb-2 text-gray-300 leading-tight focus:outline-none focus:shadow-outline">
                <Image
                  className=""
                  src={require("/public/assets/lock-02.png")}
                  width={17}
                  height={17}
                  alt="Username"
                ></Image>
                <Field
                  placeholder="Mật khẩu"
                  id="password"
                  name="password"
                  type="password"
                  className="focus:outline-none ml-2"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="flex">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[1px] border-solid border-login outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="rememberPassword"
                />
                <label
                  className="text-gray-500 text-xs font-light inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="rememberPassword"
                >
                  Lưu mật khẩu
                </label>
              </div>
              <a
                href="#!"
                className="mt-[5.5px] ml-[80px] text-xs font-light text-gray-500 transition duration-150 ease-in-out hover:text-primary focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Quên mật khẩu ?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-button hover:bg-button text-white font-bold py-2 px-24 rounded-full focus:outline-none focus:shadow-outline my-10 mx-5"
                disabled={isSubmitting}
              >
                Đăng nhập
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
