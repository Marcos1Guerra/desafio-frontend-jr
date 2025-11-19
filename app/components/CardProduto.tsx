"use client";

import { useState } from "react";
import "../styles.css";

export default function CardProduto() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-info">
          <div className="card-avatar">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D35AQHxM8mGRtIMHg/profile-framedphoto-shrink_200_200/B4DZljEvbkJQAY-/0/1758303811745?e=1764104400&v=beta&t=0rtqtag2rCWeMIQw6fpmJ7EMTGzet3A5BzVEVFsJVdM"
              alt="Marcos Guerra Soares"
            />
          </div>
          <div className="card-title">Marcos Guerra Soares</div>
          <div className="card-subtitle">Desenvolvedor Frontend</div>
          <div className="card-flex">
            <div className="card-flex2">
              <p>
                <b>980</b>
              </p>
              <p>Seguidores</p>
            </div>
            <div className="card-flex2">
              <p>
                <b>180</b>
              </p>
              <p>Seguindo</p>
            </div>
            <div className="card-flex2">
              <p>
                <b>42</b>
              </p>
              <p>Projetos</p>
            </div>
          </div>
        </div>

        <ul className="card-social">
          <li className="card-button">
            <button onClick={() => setVisivel(!visivel)}> 
               {!visivel && (
              <div className="follow-button">
                <p>Seguir</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 12 12"><path fill="#fff" d="M4 8a4.03 4.03 0 0 0-3.995 3.41c-.04.31.191.59.504.59h6.982c.313 0 .545-.28.504-.59C7.698 9.45 6 8 4 8m0-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m5.5-2a.5.5 0 0 1 .492.41L10 .5V2h1.5a.5.5 0 0 1 .492.41L12 2.5a.5.5 0 0 1-.5.5H10v1.5a.5.5 0 0 1-.992.09L9 4.5V3H7.5a.5.5 0 0 1-.492-.41L7 2.5a.5.5 0 0 1 .5-.5H9V.5a.5.5 0 0 1 .5-.5"/></svg>
              </div>
            )}
            {visivel && (
              <div className="follow-button2">
                <p>Seguindo</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#fff"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#fff" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h8Zm5.414-4.919a1 1 0 0 1 1.498 1.32l-.084.095L20 13.324a1 1 0 0 1-1.32.083l-.094-.083l-1.414-1.414a1 1 0 0 1 1.32-1.498l.094.084l.707.707l2.121-2.122ZM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"/></g></svg>
              </div>
            )}
            </button>
          </li>

          <li className="card-button button2">
            <p>Mensagem</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="#fff" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"/></svg>
          </li>

        </ul>

        <ul className="card-social bio">
           <li>Engenharia de Software | Desenvolvedor Web | JavaScript | SEO | HTML | CSS</li>
        </ul>
      </div>
    </div>
  );
}
