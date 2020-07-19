import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/global.css"

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
      <section className="skills" id="about">
        <div className="container">
          <h2 className="bar">About</h2>
          <p>
            SIからWebエンジニアへの転職を目指しているものです。最近翻訳からですがOSS活動をはじめました。
            <br />
            今はフロントメインですが、バックエンドにも力を入れたい。
          </p>
        </div>
      </section>
      <section className="skills" id="skills">
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
      <section className="skill" id="projects">
        <div className="container">
          <h2 className="bar">Projects</h2>
          <div className="details">
            <div className="max-w-sm shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://github.com/miily8310s/discord_music"
                    target="_blank"
                  >
                    Discord Music Bot
                  </a>
                </div>
                <p className="text-gray-700 text-base">
                  Discord.jsの勉強のために作成したDiscord用bot。youtubeをBGMとして流す事ができます。
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #JavaScript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Discord.js
                </span>
              </div>
            </div>
            <div className="max-w-sm shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://github.com/miily8310s/QiitaStocks"
                    target="_blank"
                  >
                    Qiita Stocks
                  </a>
                </div>
                <p className="text-gray-700 text-base">
                  Qiitaの最新20記事を取得するサイトです。そろそろメンテしなければと思っています。
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #JavaScript
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #React
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Bootstrap
                </span>
              </div>
            </div>
            {/* <div className="max-w-sm shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a
                    href="https://github.com/miily8310s/discord_music"
                    target="_blank"
                  >
                    Etc
                  </a>
                </div>
                <p className="text-gray-700 text-base">Coming soon...</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
