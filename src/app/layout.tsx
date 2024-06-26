"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from '../common/reducers/reducers';
import { Provider } from 'react-redux';
import rootSaga from '../common/sagas/saga';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware as any) as any);

sagaMiddleware.run(rootSaga);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={store}>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        {children}
      </Provider>
        </body>
    </html>
  )
}
