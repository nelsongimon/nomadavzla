"use client";

import Container from "./Container";


export default function BreadCrumbs() {
  return (
    <Container>
      <div className="py-3 text-center">
        <span className="text-sm font-light">
          Inicio {">"} Productos
        </span>
      </div>
    </Container>
  );
}
