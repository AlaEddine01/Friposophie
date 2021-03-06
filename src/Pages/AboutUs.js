import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import friposofie from "../Assets/friposofie.png";

function AboutUs() {
  return (
    <div style={{ minWidth: "100vh", padding: "0 10vh" }}>
      <h2>About Us</h2>
      <div>
        <br />
        <br />
        <p>
          <span style={{ color: "#d0121a" }}>
            <strong>Friposophie ᵀᴺ | 1ère Friperie en ligne en Tunisie </strong>
          </span>
        </p>
        <p>
          <strong>
            Chez <span style={{ color: "#218e53" }}>Friposophie.com</span>, nous
            insufflons une nouvelle vie dans des articles uniques. Notre qualité
            va briser votre idée de "friperie", et notre sélection incroyable
            d'articles de tous les jours vous aidera à trouver tout ce dont vous
            avez besoin.
          </strong>
        </p>
        <p>
          <strong>
            <span style={{ color: "#d0121a" }}>Nos vêtements</span>{" "}
            soigneusement sélectionnés pour leur qualité et leur authenticité
            répondront à tous les styles et en toutes saisons .
          </strong>
        </p>
        <p>
          <strong>
            <span style={{ color: "#d0121a" }}>Nous croyons</span> que chaque
            dinar compte, et acheter des articles d'occasion précieusement peut
            générer de grosses économies à long terme. Vous travaillez dur pour
            votre argent et vous aimez l’économie, mais les magasins locaux ne
            sont pas assez nombreux. Nous souhaitons vous permettre de trouver
            des alternatives de qualité à l'achat de nouveaux produits pour tous
            les membres de votre famille.
          </strong>
        </p>
        <img
          src={friposofie}
          alt="brandIcon"
          style={{
            width: "3.750rem",
            height: "3.750rem",
            // borderRadius: "50%",
            marginBottom: "10px",
          }}
        />
        <p>
          <strong>
            <span style={{ color: "#d0121a" }}>Nous vivons</span> pour le
            plaisir de trouver quelque chose d'unique. Nous ajoutons des
            dizaines de nouveaux articles chaque jour, de sorte que vous ne
            saurez jamais ce que vous trouverez.{" "}
            <span style={{ color: "#218e53" }}>Friposophie.com</span> est la
            fripeie de tous, avec des articles cool et pratiques que vous ne
            pouvez trouver nulle part ailleurs.
          </strong>
        </p>

        <Link to="/">
          <Button variant="primary">Go Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
