import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <Header />
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
              <p>
                Discord.jsの勉強のために作成。
                <br />
                youtubeをBGMとして流す事ができます。
              </p>
            </div>
            <div className="detail">
              <h3>Qiita Stocks</h3>
              <p>
                最新20記事を取得するサイトです。
                <br />
                そろそろメンテしなければと思っています。
              </p>
            </div>
            <div className="detail">
              <h3>Etc</h3>
              <p>Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
