import React from "react";
import * as S from "../Compoments/styled";
import Tw from "../Compoments/img/Tw.png";
import Finn from "../Compoments/img/Finn.png";
import Sw from "../Compoments/img/Sw.png";
import Recipes from "../Compoments/img/recipes.png";

export default function About() {
  return (
    <S.Div>
      <h1>Página Sobre mim </h1>
      <S.DivF>
        <S.Figure>
          <S.Img src={Tw} alt="Aqui uma foto minha" />
          <p>The Wicther</p>
        </S.Figure>

        <S.Figure>
          <S.Img src={Sw} alt="Aqui uma foto minha" />
          <p>Star Wars</p>
        </S.Figure>
        <S.Figure>
          <S.Img src={Finn} alt="Aqui uma foto minha" />
          <p>Finn </p>
        </S.Figure>
        <S.Figure>
          <S.Img src={Recipes} alt="Aqui uma foto minha" />
          <p>Recipes </p>
        </S.Figure>
      </S.DivF>
    </S.Div>
  );
}
