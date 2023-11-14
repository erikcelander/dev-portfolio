import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function InfoCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {


  return (
    <div className={` ${className}`} {...props}>
<Card className='flex flex-col w-full max-w-md p-4 mx-auto'>

   
        <CardContent className='p-2 pl-4 pr-4'>
          <span>
            As a full-stack developer, I'm dedicated to creating scalable and maintainable software. 
            I revel in solving complex problems and crafting user-friendly interfaces. 
            My focus on both front-end and back-end ensures smooth user experiences and reliable performance.
            I'm committed to a constant learning journey, adopting new technologies 
            and aiming for excellence to ensure meaningful user engagement through quality software. 
          </span>
        </CardContent>
      </Card>
    </div>
  )
}
