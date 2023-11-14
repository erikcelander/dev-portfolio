import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LangCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const skills = [
    { name: 'TypeScript', emoji: '📘' },
    { name: 'Next.js', emoji: '⚛️' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'Kubernetes', emoji: '☸️' },
    { name: 'Java', emoji: '☕' },
  ];

  return (
    <div className={className} {...props}>
      <Card className='  '>
        <CardHeader className='text-center pb-2'>
          <CardTitle>Erik Celander</CardTitle>
          <CardDescription>Fullstack developer</CardDescription>
        </CardHeader>
        <CardContent className='flex-1 p-4 pb-6'>
          <ul className='list-none pl-4'>
            {skills.map((skill) => (
              <li className='text-m' key={skill.name}>
                {skill.emoji} <span className='text-sm'>{skill.name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}