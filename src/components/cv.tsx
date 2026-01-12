import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Cv() {
  return (
    <div className='min-h-screen min-w-screen grid items-center justify-center'>
      <div className='container mx-auto p-4 sm:p-6 space-y-8 max-w-6xl'>
        <header className='text-center'>
          <div className='mx-auto w-24 h-24 sm:w-28 sm:h-28 relative mb-4'>
            <Image src='/cv/image/portrait.jpg' alt="Keisuke Tanaka's profile picture" layout='fill' className='rounded-full' />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold'>Keisuke Tanaka</h1>
          <h2 className='text-xl sm:text-2xl text-neutral-500 dark:text-neutral-400 mt-1'>Software Developer (Full Stack)</h2>
          <div className='flex justify-center items-center space-x-4 flex-col sm:flex-row mt-2'>
            <a target='_blank' href='mailto:keisuketanaka97@gmail.com' className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'>
              <Mail className='w-4 h-4 mr-2' />
              keisuketanaka97@gmail.com
            </a>
            <a target='_blank' href='https://github.com/kei0528' className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'>
              <Github className='w-4 h-4 mr-2' />
              github.com/kei0528
            </a>
            <a target='_blank' href='https://maps.app.goo.gl/rYKULbZfgniS6d6Q8' className='flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'>
              <MapPin className='w-4 h-4 mr-2' />
              Kalix, Sweden
            </a>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>Software Developer with over five years of experience in early-stage and growth-stage startups. Specialized in JavaScript and TypeScript, with strong experience in building and maintaining large-scale web applications. Hands-on experience with authentication and authorization systems, cloud infrastructure, and DevOps practices. Curious by nature, motivated by problem solving, and focused on building reliable software that lasts.</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid gap-2'>
              <div className='text-sm'>
                <b>Web Development: </b>JavaScript, TypeScript, React, Next.js, Express, NestJS, Jest, Cypress
              </div>
              <div className='text-sm'>
                <b>Databases & BaaS: </b>PostgreSQL, Firebase, Supabase, Prisma ORM
              </div>
              <div className='text-sm'>
                <b>DevOps & Cloud: </b>AWS, Terraform, Docker, GitHub Actions, Grafana
              </div>
              <div className='text-sm'>
                <b>Other Languages (Familiar): </b>Java, C# (.NET), Go
              </div>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Languages</h3>
              <div className='flex flex-wrap gap-2'>
                <div className='text-sm'>Japanese (Native), German (Fluent), English (Fluent), Swedish (A2 - B1)</div>
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
              <h3 className='font-semibold'>Software Developer (Platform & DevOps)</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Trialbee AB | 2025 - Present</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Developing and maintaining a large-scale clinical research web application serving over one million users, with a strong focus on authentication and authorization</li>
                <li>Collaborating cross-functionally with product and QA teams to deliver scalable and compliant features in a regulated domain, while supporting and mentoring junior developers</li>
                <li>Improving developer experience by enhancing observability and supporting teams in configuring AWS infrastructure using IaC (Terraform)</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Full Stack Developer</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Octily GmbH | 2021 - 2025</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Led development of a scalable CMS platform serving over 50,000 daily users, built with React and TypeScript</li>
                <li>Introduced development guidelines and a mentorship program to improve code quality and onboarding</li>
                <li>Architected and delivered 10+ micro-frontend applications using modern JS stacks</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Full Stack Developer</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>Freelance | 2020 - 2024</p>
              <ul className='list-disc list-outside pl-4 mt-2 space-y-1'>
                <li>Worked as a freelance full stack developer alongside full-time employment, contributing to international B2B projects</li>
                <li>Supported legacy codebase migrations and feature development across frontend and backend systems</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
