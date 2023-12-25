import Head from "next/head";
import React from "react";
import AppLayout from "../components/layouts/AppLayout";

const ProfilePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>NodeBird | 마이페이지</title>
      </Head>
      <div>내 프로필</div>
    </AppLayout>
  );
};

export default ProfilePage;
