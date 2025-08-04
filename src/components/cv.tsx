import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Cv() {
  return (
    <div className='min-h-screen min-w-screen grid items-center justify-center'>
      <div className='container mx-auto p-4 sm:p-6 space-y-8 max-w-3xl'>
        <header className='text-center space-y-4'>
          <div className='mx-auto w-24 h-24 sm:w-28 sm:h-28 relative mb-4'>
            <Image src='/cv/image/portrait.jpg' alt="Keisuke Tanaka's profile picture" layout='fill' className='rounded-full' />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold'>Keisuke Tanaka</h1>
          <h2 className='text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400'>Fullstack Software Engineer</h2>
          <div className='flex justify-center items-center space-x-4 flex-col sm:flex-row'>
            <a target='_blank' href='mailto:keisuketanaka97@gmail.com' className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'>
              <Mail className='w-4 h-4 mr-2' />
              keisuketanaka97@gmail.com
            </a>
            <a target='_blank' href='https://github.com/kei0528' className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'>
              <Github className='w-4 h-4 mr-2' />
              github.com/kei0528
            </a>
            <a target='_blank' href='https://maps.app.goo.gl/7o6gW7KqH8GBc6aaA' className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'>
              <MapPin className='w-4 h-4 mr-2' />
              Tyringe | Kalix, Sweden
            </a>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>Full-stack Software Engineer with 5+ years of experience building scalable, maintainable web applications. Adept at frontend and backend development, with a strong focus on test-driven development and clean architecture. Currently gaining hands-on experience in DevOps and cloud practices, contributing to improvements in deployment workflows using GitHub Actions and AWS in a collaborative team setting.</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid gap-2'>
              <div className='text-sm'>
                <b>Frontend: </b>TypeScript / React / Next.js
              </div>
              <div className='text-sm'>
                <b>Backend: </b>Node.js / Express / Nest.js
              </div>
              <div className='text-sm'>
                <b>Database: </b>PostgresSQL / Firebase
              </div>
              <div className='text-sm'>
                <b>Devops & Cloud: </b>Github Actions / Docker / AWS (EC2, CloudWatch)
              </div>
              <div className='text-sm'>
                <b>Other: </b>TDD/ Microservice architecture / Agile Development
              </div>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Languages</h3>
              <div className='flex flex-wrap gap-2'>
                <div className='text-sm'>Japanese (Native), German (Fluent), English (Fluent), Swedish (Beginner)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div>
              <h3 className='font-semibold'>Software Engineer (Platform & DevOps)</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Trialbee AB | 2025 - Present</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Developing and maintaining clinical research web application with a strong focus on test-driven development</li>
                <li>Collaborating cross-functionally with product and QA teams to deliver scalable and compliant features in a regulated domain</li>
                <li>Improving CI/CD workflows with GitHub Actions, aiming for reliable daily deployments and faster feedback cycles</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Fullstack Developer</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Octily GmbH | 2021 - 2025</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Led development of a scalable CMS platform serving over 50,000 daily users, built with React and TypeScript</li>
                <li>Introduced code review guidelines and mentorship program</li>
                <li>Architected and delivered 10+ small to mid-sized web apps using modern JS stacks</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Full Stack Developer</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Freelance | 2020 - 2024</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Worked part-time as a freelance developer alongside full-time employment, contributing to international B2B projects and legacy modernization.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
