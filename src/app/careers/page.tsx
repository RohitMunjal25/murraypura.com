import Link from 'next/link'
import { ArrowRight, Clock, Globe2, Laptop, Sparkles, Mail } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'

const benefits = [
  { title: 'Remote-first', body: 'Core hours overlap for collaboration; async by default for deep work.', icon: Globe2 },
  { title: 'Learning budget', body: '$1,800 / year for courses, conferences, or professional development.', icon: Sparkles },
  { title: 'Hardware stipend', body: 'Refresh laptop + display every three years with a simple approval flow.', icon: Laptop },
  { title: 'Flexible PTO', body: 'Minimum three disconnected weeks encouraged; team coverage built in.', icon: Clock },
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers"
      title={`Join ${SITE_CONFIG.name}`}
      description="We are always looking for passionate people who care about building great products. While we do not have any open positions right now, we would love to hear from you for future opportunities."
      actions={
        <Button className="rounded-full bg-[#e8c547] text-[#1a120e] hover:bg-[#dfc03a]" asChild>
          <Link href="/contact">
            Get in touch
            <Mail className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-[#e8dfd2] bg-[#fffefb] p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-[#2a1f1a]">No current openings</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#6b584c]">
            We are not actively hiring at the moment, but we are always interested in meeting talented individuals 
            who share our values. If you are excited about what we are building, send us a note with your background 
            and what you would bring to the team.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#6b584c]">
            When roles open up, we reach out to people who have already expressed interest. 
            It is never too early to start the conversation.
          </p>
          <Button variant="outline" className="mt-6 rounded-full border-[#e4d8cc] bg-white text-[#2a1f1a] hover:bg-[#faf6f0]" asChild>
            <Link href="/contact">Send a message</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-[#e4d8cc] bg-white/90 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[#2a1f1a]">Benefits &amp; rhythm</h3>
            <div className="mt-5 grid gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3 rounded-2xl border border-[#efe6db] bg-[#faf6f0]/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8c547]/20 text-[#6b4b16]">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2a1f1a]">{b.title}</p>
                    <p className="mt-1 text-sm text-[#6b584c]">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-[1.75rem] border border-[#e4d8cc] bg-[#fffefb] p-6 text-center sm:p-8">
        <p className="text-sm font-semibold text-[#2a1f1a]">Equal opportunity</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#6b584c]">
          We welcome applicants of every background, identity, and experience level. If you need accommodations during the process, mention it in your first note—we will make it work.
        </p>
      </div>
    </PageShell>
  )
}
