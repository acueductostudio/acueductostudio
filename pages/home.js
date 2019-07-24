import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Index() {
  const [date, setDate] = useState([]);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Head>
        <title>Next.js + Node API</title>
      </Head>
      <h1>contacto</h1>
    </main>
  );
}