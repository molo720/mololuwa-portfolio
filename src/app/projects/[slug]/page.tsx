import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Process</h2>
              <p className="text-muted-foreground">{project.process}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>

            <section className="p-6 rounded-lg bg-secondary/20 border border-border/40">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Results & Impact
              </h2>
              <p className="text-muted-foreground">{project.results}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <p className="text-muted-foreground">{project.keyTakeaways}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/40">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
