import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>UMKM Hosting - Solusi Hosting Terbaik</title>
      </Head>
      <Navbar />
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Selamat Datang di UMKM Hosting</h1>
        <p>Hosting murah, cepat, dan terpercaya untuk bisnis Anda!</p>
        <a href="/paket" style={{ padding: "10px 20px", background: "blue", color: "white", textDecoration: "none" }}>
          Lihat Paket Hosting
        </a>
      </main>
      <Footer />
    </>
  );
}
