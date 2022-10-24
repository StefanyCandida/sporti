import React from "react";
import * as S from "../Compoments/styled";
import Stefany from "../Compoments/img/Stefany-anel.jpg";
import Azul from "../Compoments/img/Stefany-azul.jpg";

export default function About() {
  return (
    <S.Div>
      <h1>Página Sobre mim </h1>
      <S.DivF>
        <S.Figure>
          <S.Img src={Stefany} alt="Aqui uma foto minha" />
          <p>sou Stefany tenho 33 anos. </p>
        </S.Figure>
        <S.Figure>
          <S.Img src={Azul} alt="Aqui uma foto minha" />
          <p>
            Entrei na tecnologia a pouco mais de 9 meses pelo curso Vai Na WEB{" "}
          </p>
        </S.Figure>
      </S.DivF>
    </S.Div>
  );
}
