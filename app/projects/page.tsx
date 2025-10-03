export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Eコマースサイト',
      description: 'React、Next.js、TypeScriptを使用したモダンなEコマースプラットフォーム。レスポンシブデザインとパフォーマンス最適化に重点を置いて開発しました。',
      image: 'bg-gradient-to-br from-blue-400 to-purple-500',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'タスク管理アプリ',
      description: 'チーム向けのタスク管理アプリケーション。ドラッグ&ドロップ機能やリアルタイム同期を実装しています。',
      image: 'bg-gradient-to-br from-green-400 to-blue-500',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'ポートフォリオサイト',
      description: 'このサイト自体も作品の一つです。Next.js 13のApp Routerを使用し、モダンな技術スタックで構築しています。',
      image: 'bg-gradient-to-br from-purple-400 to-pink-500',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: '天気予報アプリ',
      description: 'OpenWeather APIを使用した天気予報アプリ。位置情報の取得や7日間の予報表示機能を実装しています。',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'ブログシステム',
      description: 'Next.jsとMarkdownを使用したブログシステム。SEO最適化と高速な静的サイト生成を実現しています。',
      image: 'bg-gradient-to-br from-indigo-400 to-purple-500',
      technologies: ['Next.js', 'Markdown', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'チャットアプリ',
      description: 'リアルタイムチャットアプリケーション。Socket.ioを使用してリアルタイム通信を実装しています。',
      image: 'bg-gradient-to-br from-pink-400 to-red-500',
      technologies: ['React', 'Node.js', 'Socket.io', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">プロジェクト</h1>
          <p className="text-xl text-gray-600">
            これまでに手がけたプロジェクトをご紹介します
          </p>
        </div>

        {/* 注目のプロジェクト */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">注目のプロジェクト</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-64 ${project.image}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="text-blue-600 font-medium hover:text-blue-800"
                    >
                      ライブデモ →
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 font-medium hover:text-gray-800"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* その他のプロジェクト */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">その他のプロジェクト</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-40 ${project.image}`}></div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="flex gap-3 text-sm">
                    <a
                      href={project.liveUrl}
                      className="text-blue-600 font-medium hover:text-blue-800"
                    >
                      デモ
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 font-medium hover:text-gray-800"
                    >
                      コード
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}