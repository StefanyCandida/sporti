import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Works from "../Pages/Works";
import * as S from "./styled";

export default function Header() {
  return (
    <Router>
      <S.Ul>
        <S.Links to="/">
          <li>Home</li>
        </S.Links>
        <S.Links to="/about">
          <li>About</li>
        </S.Links>
        <S.Links to="/works">
          <li>works</li>
        </S.Links>
      </S.Ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}
