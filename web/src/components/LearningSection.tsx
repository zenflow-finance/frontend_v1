const lessons = [
  {
    title: "Start with your financial goal",
    description: "Use guided prompts to pick the right investment path."
  },
  {
    title: "Understand risk without jargon",
    description: "We translate volatility into clear, human language."
  },
  {
    title: "Track progress weekly",
    description: "Simple dashboards show what changed and why."
  }
];

export default function LearningSection() {
  return (
    <section id="learning" className="section-pad bg-white">
      <div className="container-base grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <h2 className="section-title">Education that builds confidence</h2>
          <p className="section-subtitle">
            Guided learning paths, bite-sized explainers, and weekly market
            recaps. We help you make smart decisions at every step.
          </p>
          <button className="button-primary">Start learning</button>
        </div>
        <div className="grid gap-4">
          {lessons.map((lesson) => (
            <div key={lesson.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{lesson.title}</h3>
              <p className="mt-2 text-sm text-slate">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
