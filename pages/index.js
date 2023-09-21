import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

import Layout from '../components/layout';
import Homepage from "../components/homepage"

const Home = () => {
  const router = useRouter();

  // Check if the 'type' cookie exists
  const userType = Cookies.get('type');
  const userId = Cookies.get('lawyerId') || Cookies.get('userid') || Cookies.get('judgeId') || Cookies.get('employeeId') || Cookies.get('companyId');

  useEffect(() => {
    // If 'type' cookie exists, redirect to the appropriate page
    if (userType && userId) {
      router.push(`/${userType}/${userId}`);
    }
  }, [userType, userId, router]);

  return (
    <div>
      <Layout>
      <Homepage></Homepage>
      </Layout>
    </div>
  );
};

export default Home;
