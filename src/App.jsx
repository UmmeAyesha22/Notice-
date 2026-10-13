import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import NoticeList from "./components/NoticeList.jsx";
import NoticeTable from "./components/NoticeTable.jsx";
import UsefulLinks from "./components/UsefulLinks.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="wrap">
        <NoticeList />
        <NoticeTable />
        <UsefulLinks />
      </main>
      <Footer />
    </>
  );
}
