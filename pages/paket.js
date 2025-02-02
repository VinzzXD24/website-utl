import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Paket() {
  const paketHosting = [
    { nama: "Basic", harga: "Rp 50.000/bulan", fitur: ["1 GB Storage", "Unlimited Bandwidth", "1 Website"] },
    { nama: "Standard", harga: "Rp 100.000/bulan", fitur: ["5 GB Storage", "Unlimited Bandwidth", "3 Website"] },
    { nama: "Premium", harga: "Rp 200.000/bulan", fitur: ["10 GB Storage", "Unlimited Bandwidth", "5 Website"] },
  ];

  return (
    <>
      <Navbar />
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Paket Hosting</h1>
        {paketHosting.map((paket, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "20px", margin: "10px", display: "inline-block" }}>
            <h2>{paket.nama}</h2>
            <p>{paket.harga}</p>
            <ul>
              {paket.fitur.map((fitur, i) => (
                <li key={i}>{fitur}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
