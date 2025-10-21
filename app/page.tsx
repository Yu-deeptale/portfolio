export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600 block">Welcome!</span>
              深尾 悠のポートフォリオサイトへようこそ！
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ECCコンピュータ専門学校で学んだITスキルを活かして日々制作に励んでおります。企画・フロントエンド開発を得意です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                プロジェクトを見る
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                連絡先
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">技術スキル</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              フロントエンド開発における幅広い技術スタックを習得しています
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', color: 'bg-blue-100 text-blue-800' },
              { name: 'Next.js', color: 'bg-gray-100 text-gray-800' },
              { name: 'TypeScript', color: 'bg-blue-100 text-sky-800' },
              { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
              { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'HTML/CSS', color: 'bg-orange-100 text-orange-800' },
              { name: 'Node.js', color: 'bg-red-100 text-red-800' },
              { name: 'Figma', color: 'bg-purple-100 text-purple-800' },
              { name: 'MySQL', color: 'bg-purple-100 text-emerald-800' },
              { name: 'Docker', color: 'bg-blue-100 text-sky-800' },
              { name: 'AWS', color: 'bg-yellow-100 text-amber-800' },
              { name: 'Flutter', color: 'bg-pink-100 text-pink-800' },
              
            ].map((skill) => (
              <div key={skill.name} className="text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${skill.color}`}>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトプレビューセクション */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">注目のプロジェクト</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              最近手がけたプロジェクトの一部をご紹介します
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">プロジェクト {i}</h3>
                  <p className="text-gray-600 mb-4">
                    プロジェクトの説明がここに入ります。使用した技術やプロジェクトの目的について簡潔に説明します。
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Next.js</span>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800">
                    詳細を見る →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              すべてのプロジェクトを見る
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
