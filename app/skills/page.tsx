export default function Skills() {
  const skillCategories = [
    {
      title: 'フロントエンド',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ],
    },
    {
      title: 'スタイリング',
      skills: [
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Styled Components', level: 80 },
        { name: 'CSS Modules', level: 85 },
      ],
    },
    {
      title: 'ツール・その他',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 80 },
        { name: 'Figma', level: 70 },
        { name: 'VSCode', level: 95 },
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">スキル</h1>
          <p className="text-xl text-gray-600">
            フロントエンド開発における技術スタックと習熟度
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">学習中の技術</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Vue.js', 'Svelte', 'Three.js', 'WebGL', 'Node.js', 'Python'].map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}