import React from "react"

export default () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
        integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv"
        crossOrigin="anonymous"
      />
      <header className="header">
        <div className="container">
          <div className="site">
            <a href="/">miruo's Portfolio</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">TOP</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skill">SKILLS</a>
              </li>
              <li>
                <a href="#project">PROJECTS</a>
              </li>
              <li>
                <a href="#">LINKS</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <figure>
          <img src="/images/computer.jpg" alt="" />
        </figure>
        <div className="catch">
          <h1>
            Hi! My name is miruo!
            <br />
            the love of code.
          </h1>
        </div>
      </section>
      <section className="skill" id="about">
        <div className="container">
          <h2 className="bar">About</h2>
          <p>
            SIからWebエンジニアへの転職を目指しているものです。最近翻訳からですがOSS活動をはじめました。
            <br />
            今はフロントメインですが、バックエンドにも力を入れたい。
          </p>
        </div>
      </section>
      <section className="skill" id="skill">
        <div className="container">
          <h2 className="bar">Skills</h2>
          <div className="details">
            <div className="detail">
              <h3>JavaScript</h3>
              {/* <p>FRUIT</p> */}
              <p>
                一番使っている言語です。
                <br />
                今はフロントメインですが、バックエンドにも力を入れたい。
                <br />
                (使用フレームワーク) React.js
              </p>
            </div>
            <div className="detail">
              <h3>Python</h3>
              {/* <p>GRAIN</p> */}
              <p>
                一番好きな言語です。
                <br />
                そろそろプロジェクトを作りたいところです。
                <br />
                標準関数を勉強中。
              </p>
            </div>
            <div className="detail">
              <h3>SQL</h3>
              {/* <p>BEVERAGE</p> */}
              <p>
                Oracle、SQLServerの実務経験あり。
                <br />
                基本は十分なレベルですが、初期構成はやったことはありません。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="skill" id="project">
        <div className="container">
          <h2 className="bar">Projects</h2>
          <div className="details">
            <div className="detail">
              <h3>Discord Music</h3>
              {/* <p>FRUIT</p> */}
              <p>
                Discord.jsの勉強のために作成。
                <br />
                youtubeをBGMとして流す事ができます。
              </p>
            </div>
            <div className="detail">
              <h3>Qiita Stocks</h3>
              {/* <p>GRAIN</p> */}
              <p>
                最新20記事を取得するサイトです。
                <br />
                そろそろメンテしなければと思っています。
              </p>
            </div>
            <div className="detail">
              <h3>Etc</h3>
              {/* <p>GRAIN</p> */}
              <p>Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="site">
            <p>&#064;miruo's portfolio 2020</p>
          </div>
          <ul className="sns">
            <li>
              <a href="https://twitter.com/miruoon" target="_blank">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/miily8310s" target="_blank">
                <i className="fab fa-github"></i>
                <span className="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a href="https://katanugramer.hatenablog.com/" target="_blank">
                <svg
                  className="hatena"
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  viewBox="20 15 300 300"
                >
                  <path
                    fill="white"
                    d="M149.999 248.909c-54.537 0-98.906-44.367-98.906-98.909 0-54.537 44.369-98.909 98.906-98.909 54.545 0 98.908 44.372 98.908 98.909 0 54.542-44.363 98.909-98.908 98.909zm0-185.238c-47.601 0-86.33 38.723-86.33 86.329 0 47.605 38.729 86.332 86.33 86.332 47.61 0 86.338-38.727 86.338-86.332 0-47.606-38.728-86.329-86.338-86.329zM161.52 101.16c-4.832-9.785-7.783-19.3-9.273-24.845v70.055c2.447.917 4.197 3.257 4.197 6.021 0 3.559-2.887 6.442-6.443 6.442-3.56 0-6.443-2.885-6.443-6.442 0-2.896 1.925-5.317 4.558-6.131v-70.019c-1.485 5.531-4.438 15.092-9.293 24.919-7.571 15.314-17.009 28.823-17.009 28.823l6.036 82.598s5.736 6.401 22.31 6.41h.023c16.573-.009 22.312-6.41 22.312-6.41l6.035-82.598c-.003 0-9.441-13.508-17.01-28.823z"
                  />
                </svg>
                <span className="sr-only">Hatena</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
