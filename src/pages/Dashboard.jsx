import React from 'react'
import { COURSES } from '../data/dummy'
import ProgressBar from '../components/ui/ProgressBar'

export default function Dashboard(){
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-sm text-slate-600">Your enrolled courses & progress</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {COURSES.slice(0,4).map(c=> (
          <div className="p-4 bg-white rounded-xl border" key={c.id}>
            <div className="flex items-center gap-3">
              <img src={c.cover} className="w-12 h-12 rounded-md" alt='' />
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-xs text-slate-500">{c.author}</div>
              </div>
            </div>

            <div className="mt-4">
              <ProgressBar value={Math.floor(Math.random()*80)} />
            </div>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="font-semibold">Certificates</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="card-glass p-4 rounded-xl">Certificate: Foundations of Deep Learning</div>
          <div className="card-glass p-4 rounded-xl">Certificate: Applied ML</div>
        </div>
      </section>
    </div>
  )
}
