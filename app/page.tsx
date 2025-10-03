import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              こんにちは、私は
              <span className="text-blue-600 block">フロントエンド開発者</span>
              です
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ユーザー体験を重視したモダンなWebアプリケーションを作成します。
              React、Next.js、TypeScriptを使用して、高品質なソリューションを提供します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                プロジェクトを見る
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                お問い合わせ
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
              { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
              { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
              { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'HTML/CSS', color: 'bg-orange-100 text-orange-800' },
              { name: 'Git', color: 'bg-red-100 text-red-800' },
              { name: 'Figma', color: 'bg-purple-100 text-purple-800' },
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

      {/* CTAセクション */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            一緒にプロジェクトを始めませんか？
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            新しいプロジェクトのご相談や、お仕事のご依頼をお待ちしています。
            お気軽にお問い合わせください。
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            お問い合わせする
          </button>
        </div>
      </section>
    </>
  );
}
