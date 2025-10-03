'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/container'

type ProfileJson = {
  profile: {
    name: string
    title: string
    website: string
    email: string
  }
  careerObjective: {
    shortTerm: string
    longTerm: string
  }
  experience: Array<{
    position: string
    company: string
    date: string
    projects: Array<{
      title: string
      responsibilities: string[]
    }>
  }>
  projects: Array<{
    title: string
    type: string
    technologies: string[]
    responsibilities: string[]
  }>
  skills: {
    languages: string[]
    frameworksAndLibraries: string[]
    databases: string[]
    toolsAndTechnologies: string[]
    devOpsAndDeployment: string[]
  }
}

export default function CvPage() {
  const [data, setData] = useState<ProfileJson | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    fetch('/json/profile.json')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load profile.json')
        return r.json()
      })
      .then((j) => {
        if (isMounted) setData(j as ProfileJson)
      })
      .catch((e) => {
        if (isMounted) setError(e.message)
      })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="pt-32 pb-16 bg-dark-bg min-h-screen">
      <Container>
        {!data && !error && (
          <div className="text-center text-white/70">Loading profile...</div>
        )}
        {error && (
          <div className="text-center text-red-400">{error}</div>
        )}
        {data && (
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">{data.profile.name}</h1>
          <p className="text-text-secondary mt-2">{data.profile.title}</p>
          <div className="text-sm text-white/70 mt-2 space-x-4">
            <span>{data.profile.email}</span>
            <a className="underline" href={data.profile.website} target="_blank" rel="noreferrer">Website</a>
          </div>
          <p className="mt-4 text-white/80 max-w-3xl">{data.careerObjective.shortTerm}</p>
        </header>
        )}

        {data && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-white/90 font-medium">Languages</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.languages.map((k) => (
                      <span key={k} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/80">{k}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-white/90 font-medium">Frameworks & Libraries</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.frameworksAndLibraries.map((k) => (
                      <span key={k} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/80">{k}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-white/90 font-medium">Databases</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.databases.map((k) => (
                      <span key={k} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/80">{k}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-white/90 font-medium">Tools & Tech</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.toolsAndTechnologies.map((k) => (
                      <span key={k} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/80">{k}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-white/90 font-medium">DevOps & Deployment</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.devOpsAndDeployment.map((k) => (
                      <span key={k} className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/80">{k}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-8 lg:col-span-2">
            <section className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                {data.experience.map((exp) => (
                  <div key={exp.company}>
                    <div className="flex flex-wrap items-baseline gap-2 justify-between">
                      <h3 className="text-lg font-bold">{exp.position} · {exp.company}</h3>
                      <span className="text-sm text-white/60">{exp.date}</span>
                    </div>
                    <div className="mt-4 space-y-4">
                      {exp.projects.map((p) => (
                        <div key={p.title} className="rounded-xl p-4 bg-white/5 border border-white/10">
                          <div className="font-semibold">{p.title}</div>
                          <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                            {p.responsibilities.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              <div className="space-y-4">
                {data.projects.map((p) => (
                  <div key={p.name}>
                    <h3 className="font-semibold">{p.title} <span className="text-white/60 text-sm">— {p.type}</span></h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/70">{t}</span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                      {p.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
          </main>
        </div>
        )}
      </Container>
    </section>
  )
}

