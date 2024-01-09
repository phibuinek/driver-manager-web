import React from 'react';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/your-logo.png" alt="Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Đăng nhập vào tài khoản của bạn
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Tài khoản</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                     placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 
                     focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Tài khoản" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Mật khẩu</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                     placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 
                     focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" 
                     className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Lưu mật khẩu
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Quên mật khẩu?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
                    rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-green-500">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
