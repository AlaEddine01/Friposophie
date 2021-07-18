import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div style={{ width: "80vw", margin: "0 10vw" }}>
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
            Chez <span style={{ color: "#218e53" }}>Friposophie.com</span>, nous insufflons une
            nouvelle vie dans des articles uniques. Notre qualité va briser votre idée de
            "friperie", et notre sélection incroyable d'articles de tous les jours vous aidera
            à trouver tout ce dont vous avez besoin.
          </strong>
        </p>
        <p>
          <strong>
            <span style={{ color: "#d0121a" }}>Nos vêtements</span> soigneusement sélectionnés
            pour leur qualité et leur authenticité répondront à tous les styles et en toutes
            saisons .
          </strong>
        </p>
        <p>
          <strong>
            <span style={{ color: "#d0121a" }}>Nous croyons</span> que chaque dinar compte, et
            acheter des articles d'occasion précieusement peut générer de grosses économies à
            long terme. Vous travaillez dur pour votre argent et vous aimez l’économie, mais
            les magasins locaux ne sont pas assez nombreux. Nous souhaitons vous permettre de
            trouver des alternatives de qualité à l'achat de nouveaux produits pour tous les
            membres de votre famille.
          </strong>
        </p>
        <img
          src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/217584064_105782928455895_1953918991398843147_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=4gTvWJOAA3cAX-xhFCD&_nc_ht=scontent.ftun15-1.fna&oh=9fd67b5254d3bf15a665429b0f39fc08&oe=60F88333"
          // style={{ width: "2.750rem", height: "2.750rem", borderRadius: "50%" }}
          alt="brandIcon"
          style={{width:"80vw"}}
        />
        <p>
          <strong>
            <span style={{ color: "#d0121a" }}>Nous vivons</span> pour le plaisir de trouver
            quelque chose d'unique. Nous ajoutons des dizaines de nouveaux articles chaque
            jour, de sorte que vous ne saurez jamais ce que vous trouverez.{" "}
            <span style={{ color: "#218e53" }}>Friposophie.com</span> est la fripeie de tous,
            avec des articles cool et pratiques que vous ne pouvez trouver nulle part ailleurs.
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
