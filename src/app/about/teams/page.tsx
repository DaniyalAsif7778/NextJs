import Link from 'next/link';

export default function TeamPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years of experience in tech entrepreneurship.',
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack expert specializing in modern web technologies and scalability.',
      image: '👨‍💻',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Design Director',
      bio: 'Creative designer passionate about user-centered design and innovation.',
      image: '👩‍🎨',
    },
    {
      name: 'James Thompson',
      role: 'Product Manager',
      bio: 'Strategic thinker focused on delivering products that users love.',
      image: '👨‍💼',
    },
    {
      name: 'Lisa Park',
      role: 'Marketing Lead',
      bio: 'Growth specialist with proven track record in digital marketing.',
      image: '👩‍💻',
    },
    {
      name: 'David Wilson',
      role: 'DevOps Engineer',
      bio: 'Infrastructure expert ensuring reliability and performance.',
      image: '👨‍💻',
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen pt-24 md:pt-0">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-start py-12 px-6 md:px-16 bg-zinc-50 dark:bg-black">
        <div className="w-full mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
            Our Team
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            Meet the talented people behind MyBrand. We&lsquo;re a diverse group of professionals 
            united by a passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                {member.role}
              </p>
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="w-full mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-zinc-50 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              We&lsquo;re always looking for talented individuals to join our growing team.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
