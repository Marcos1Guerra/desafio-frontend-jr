import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import CardProduto from "../components/CardProduto"; 

describe("CardProduto Component", () => {
  
  // Teste 1: Verifica se as informações estáticas principais estão na tela
  it("deve renderizar as informações do perfil corretamente", () => {
    render(<CardProduto />);

    expect(screen.getByText("Marcos Guerra Soares")).toBeInTheDocument();
    expect(screen.getByText("Desenvolvedor Frontend")).toBeInTheDocument();

    expect(screen.getByText("980")).toBeInTheDocument(); 
    expect(screen.getByText("180")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();  
  });

  // Teste 2: Verifica se a imagem renderiza com o texto alternativo correto
  it("deve renderizar a imagem de perfil com o alt text correto", () => {
    render(<CardProduto />);
    
    const imagem = screen.getByAltText("Marcos Guerra Soares");
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute("src");
  });

  // Teste 3: Verifica o estado inicial do botão
  it("deve mostrar o botão 'Seguir' inicialmente", () => {
    render(<CardProduto />);
    
    const botao = screen.getByRole("button", { name: /seguir/i });
    expect(botao).toBeInTheDocument();
  });

  // Teste 4: Verifica a interação de clique (mudar estado)
  it("deve mudar para 'Seguindo' ao clicar no botão", () => {
    render(<CardProduto />);
    
    const botao = screen.getByRole("button", { name: /seguir/i });
    fireEvent.click(botao);

    const botaoSeguindo = screen.getByRole("button", { name: /seguindo/i });
    expect(botaoSeguindo).toBeInTheDocument();
  });


  // Teste 5: Verifica se volta para 'Seguir' se clicar novamente (toggle)
  it("deve voltar para 'Seguir' ao clicar novamente", () => {
    render(<CardProduto />);
    
    const botao = screen.getByRole("button", { name: /seguir/i });
    fireEvent.click(botao);

    let botaoSeguindo = screen.getByRole("button", { name: /seguindo/i });
    expect(botaoSeguindo).toBeInTheDocument();

    fireEvent.click(botaoSeguindo);

    const botaoSeguirDeNovo = screen.getByRole("button", { name: /seguir/i });
    expect(botaoSeguirDeNovo).toBeInTheDocument();
  });
});