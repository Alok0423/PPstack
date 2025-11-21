import React from 'react'
import { useParams } from 'react-router-dom'
import { COURSES } from '../data/dummy'
import GradientButton from '../components/ui/GradientButton'
import ProgressBar from '../components/ui/ProgressBar'

export default function CourseDetail(){
  const { id } = useParams()
  const course = COURSES.find(c=> c.id === id) || COURSES[0]
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-sm text-slate-600 mt-2">{course.description}</p>

          <section className="mt-6 card-glass p-4 rounded-xl">
            <h3 className="font-semibold">What you'll learn</h3>
            <ul className="mt-3 list-disc list-inside text-slate-700">
              <li>Deep learning fundamentals</li>
              <li>Model training & optimization</li>
              <li>Deploying models</li>
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="font-semibold">Syllabus</h3>
            <ol className="mt-2 space-y-2">
              <li className="p-3 bg-white rounded-md border">Week 1 — Intro</li>
              <li className="p-3 bg-white rounded-md border">Week 2 — Models</li>
              <li className="p-3 bg-white rounded-md border">Week 3 — Optimization</li>
            </ol>
          </section>
        </div>

        <aside className="p-4 card-glass rounded-xl">
          <div className="text-sm">Instructor</div>
          <div className="mt-3 flex items-center gap-3">
            <img src={course.cover} className="w-12 h-12 rounded-full" alt="" />
            <div>
              <div className="font-semibold">{course.author}</div>
              <div className="text-xs text-slate-500">Industry Mentor</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm">Progress</div>
            <div className="mt-2"><ProgressBar value={45} /></div>
            <div className="mt-4">
              <GradientButton>Enroll now</GradientButton>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
