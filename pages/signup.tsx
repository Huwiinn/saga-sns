import Head from "next/head";
import React from "react";
import AppLayout from "../components/layouts/AppLayout";

const SignUpPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>NodeBird | 회원가입</title>
      </Head>
      <div>회원가입 페이지</div>
    </AppLayout>
  );
};

export default SignUpPage;
