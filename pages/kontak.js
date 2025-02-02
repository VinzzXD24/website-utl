import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Kontak() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Hubungi Kami</h1>
        <p>Jika ada pertanyaan, silakan hubungi kami:</p>
        <a href="https://wa.me/6281234567890" style={{ padding: "10px 20px", background: "green", color: "white", textDecoration: "none" }}>
          Chat WhatsApp
        </a>
      </main>
      <Footer />
    </>
  );
}
