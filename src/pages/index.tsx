import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

export default () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <figure>
          <img
            src="https://source.unsplash.com/95YRwf6CNw8/1920x1280"
            alt="image"
          />
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
          <div className="container mx-auto px-4">
            <div className="inline-grid max-w-xs max-w-xs bg-green-800 rounded-lg border shadow-lg pb-6 lg:pb-0">
              <div className="w-full p-2">
                <img
                  src="https://source.unsplash.com/asviIGR3CPE/800x600"
                  alt="image"
                  className="h-64 lg:h-full object-cover object-center w-full"
                ></img>
              </div>

              <div className="w-full px-4">
                <div className="inline-grid">
                  <p className="work-sans font-semibold text-xl text-white text-left">
                    miruo
                  </p>
                  <p className="raleway text-sm my-4 text-white text-left">
                    新卒で入社したSI系エンジニア4年目です。Excelドキュメント中心の業務から離れるためにWebエンジニアへの転職を目指しています。
                    今はReact+RailsでWebアプリケーションを開発中。
                    <br />
                    主にフロントエンドを学んでいますが、バックエンドにも力を入れたい。最近は翻訳中心でOSS活動もやっています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skill" id="skills">
        <div className="container">
          <h2 className="bar">Programming Skills</h2>
          <div className="details">
            <div className="md:px-16 md:w-full">
              <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                  <thead className="bg-green-800 text-white">
                    <tr>
                      <th className="text-left py-3 px-4 uppercase font-semibold">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold">
                        Star Rating
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold">
                        Framework
                      </th>
                      <th className="py-3 px-4 uppercase font-semibold">
                        Work experience
                      </th>
                      <th className="py-3 px-4 uppercase font-semibold">
                        Years Of Use
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">JavaScript</td>
                      <td className="text-left py-3 px-4">★★★☆☆</td>
                      <td className="text-left py-3 px-4">React / Vue.js</td>
                      <td className="py-3 px-4">×</td>
                      <td className="py-3 px-4">2 years</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">TypeScript</td>
                      <td className="text-left py-3 px-4">★★☆☆☆</td>
                      <td className="text-left py-3 px-4">React</td>
                      <td className="py-3 px-4">×</td>
                      <td className="py-3 px-4">1 month</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">Python</td>
                      <td className="text-left py-3 px-4">★★☆☆☆</td>
                      <td className="text-left py-3 px-4">Django</td>
                      <td className="py-3 px-4">×</td>
                      <td className="py-3 px-4">0.1 year</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">Ruby</td>
                      <td className="text-left py-3 px-4">★★★☆☆</td>
                      <td className="text-left py-3 px-4">Ruby on Rails</td>
                      <td className="py-3 px-4">×</td>
                      <td className="py-3 px-4">0.5 year</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">Java</td>
                      <td className="text-left py-3 px-4">★★☆☆☆</td>
                      <td className="text-left py-3 px-4">Spring Framework</td>
                      <td className="py-3 px-4">●</td>
                      <td className="py-3 px-4">0.5 year</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">VB.NET</td>
                      <td className="text-left py-3 px-4">★★★★☆</td>
                      <td className="text-left py-3 px-4">-</td>
                      <td className="py-3 px-4">●</td>
                      <td className="py-3 px-4">1.2 year</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">Oracle DB</td>
                      <td className="text-left py-3 px-4">★★★★☆</td>
                      <td className="text-left py-3 px-4">Spring Framework</td>
                      <td className="py-3 px-4">●</td>
                      <td className="py-3 px-4">1 year</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">SQL Server</td>
                      <td className="text-left py-3 px-4">★★★★☆</td>
                      <td className="text-left py-3 px-4">-</td>
                      <td className="py-3 px-4">●</td>
                      <td className="py-3 px-4">0.85 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="md:px-16 md:w-full my-4">
              <div className="shadow overflow-hidden rounded border-b border-gray-200 w-full">
                <table className="bg-white">
                  <thead className="bg-green-800 text-white">
                    <tr>
                      <th className="text-left py-3 px-4 uppercase font-semibold w-1/3">
                        Star Rating
                      </th>
                      <th className="text-left py-3 px-4 uppercase font-semibold">
                        Level
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">★☆☆☆☆</td>
                      <td className="text-left py-3 px-4">
                        少しかじった程度のレベル
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">★★☆☆☆</td>
                      <td className="text-left py-3 px-4">
                        基礎文法は一通り理解しているレベル
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">★★★☆☆</td>
                      <td className="text-left py-3 px-4">
                        本などを参考にしながら1本オリジナルアプリケーションを作成出来るレベル
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">★★★★☆</td>
                      <td className="text-left py-3 px-4">
                        公式ドキュメントあれば仕事出来るレベル
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="text-left py-3 px-4">★★★★★</td>
                      <td className="text-left py-3 px-4">
                        3年以上実務で継続使用していて経験豊富
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skill" id="projects">
        <div className="container">
          <h2 className="bar">Projects</h2>
          <div className="flex flex-row">
            <div className="max-w-sm shadow-lg m-6">
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
            <div className="max-w-sm shadow-lg m-6">
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
          </div>
        </div>
      </section>
      <section className="skill" id="contact">
        <div className="container">
          <h2 className="bar">Contact</h2>
          <ul className="sns">
            <li>
              <a href="https://twitter.com/miruoon" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
                <span> Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/miily8310s" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                <span> Github</span>
              </a>
            </li>
            <li>
              <a href="https://katanugramer.hatenablog.com/" target="_blank">
                <span>Hatena Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  )
}
