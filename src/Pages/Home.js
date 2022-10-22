import React from "react";
import * as S from "../Compoments/styled";
import Stefany from "../Compoments/img/Stefany-anel.jpg";

export default function Home() {
  return (
    <S.Div>
      <h1>Desenvolvedor Front-end</h1>
      <p>Stefany Candida</p>
      <S.Figure>
        <S.Img src={Stefany} alt="Aqui uma foto minha" />
      </S.Figure>
    </S.Div>
  );
}
