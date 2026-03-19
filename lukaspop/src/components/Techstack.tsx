"use client";

import {
  Html5Original,
  Css3Original,
  SassOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  DotnetcoreOriginal,
  CsharpOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  MysqlOriginal,
  PrismaOriginal,
  GitOriginal,
  DockerOriginal,
  FigmaOriginal,
  ReactOriginal,
  JavascriptOriginal,
  PhpOriginal,
  WordpressOriginal,
  TypescriptOriginal,
  PythonOriginal,
} from "devicons-react";

type StackItem = {
  icon: React.ComponentType<{ size?: string | number }>;
  name: string;
};

type StackGroup = {
  title: string;
  items: StackItem[];
};

const groups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { icon: Html5Original, name: "HTML" },
      { icon: Css3Original, name: "CSS" },
      { icon: SassOriginal, name: "SCSS" },
      { icon: JavascriptOriginal, name: "JavaScript" },
      { icon: TypescriptOriginal, name: "TypeScript" },
      { icon: ReactOriginal, name: "React" },
      { icon: NextjsOriginal, name: "Next.js" },
      { icon: TailwindcssOriginal, name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: NodejsOriginal, name: "Node.js" },
      { icon: DotnetcoreOriginal, name: ".NET" },
      { icon: CsharpOriginal, name: "C#" },
      { icon: PhpOriginal, name: "PHP" },
      { icon: PythonOriginal, name: "Python" },
      { icon: PostgresqlOriginal, name: "PostgreSQL" },
      { icon: MysqlOriginal, name: "SQL" },
      { icon: PrismaOriginal, name: "Prisma" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: GitOriginal, name: "Git" },
      { icon: WordpressOriginal, name: "Wordpress" },
      { icon: DockerOriginal, name: "Docker" },
      { icon: FigmaOriginal, name: "Figma" },
    ],
  },
];

function TechPill({ item }: { item: StackItem }) {
  const Icon = item.icon;

  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex h-10 w-10 items-center justify-center">
        <Icon size="24" />
      </div>
      <span className="text-sm text-neutral-300 transition group-hover:text-white">
        {item.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {groups.map((group) => (
        <section key={group.title} className="space-y-4">
          <h3 className="text-sm font-medium tracking-[0.18em] text-neutral-500 uppercase">
            {group.title}
          </h3>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {group.items.map((item) => (
              <TechPill key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
