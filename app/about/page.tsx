export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">profile</h1>
          <p className="text-xl text-gray-600">
            フロントエンド開発者として、ユーザー体験を重視したWebアプリケーションを作成しています
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-80 h-80 rounded-lg mx-auto"></div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">経歴</h2>
            <p className="text-gray-600 mb-6">
              在学中に様々なITスキルと経験を積み、特にReact、Next.js、TypeScriptを使用したモダンなフロントエンド開発を専門としています。
              アクセシブルで使いやすいWebアプリケーションの開発に取り組んでいます。
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">専門分野</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• React / Next.jsを使用したSPAの開発</li>
              <li>• TypeScriptによる型安全な開発</li>
              <li>• レスポンシブデザインの実装</li>
              <li>• パフォーマンス最適化</li>
              <li>• UI/UXデザインの実装</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}