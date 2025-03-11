import React from "react"
import Header from "../../components/header/header"

function Home () {
  return (
    <>
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" />
        <section>
             
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;