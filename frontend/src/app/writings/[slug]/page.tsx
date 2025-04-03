import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { getWritingBySlug } from "@/lib/writings"

interface WritingPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const writing = await getWritingBySlug(params.slug)

  if (!writing) {
    return {
      title: "Writing Not Found",
    }
  }

  return {
    title: `${writing.title} | Author's Website`,
    description: writing.excerpt,
  }
}

export default async function WritingPage({ params }: WritingPageProps) {
  const writing = await getWritingBySlug(params.slug)

  if (!writing) {
    notFound()
  }

  // In a real application, you would fetch the full content here
  const content =
    writing.content ||
    `
    <p>This is a placeholder for the full content of "${writing.title}". In a real application, this would be the complete text of the writing, formatted appropriately based on the type of content.</p>
    
    <p>For books, this might include chapters or excerpts. For poems, the complete verses. For blog posts and essays, the full article text.</p>
    
    <p>The content could be stored in a CMS like Contentful, Sanity, or Strapi, or in Markdown files that are processed with a library like MDX.</p>
  `

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/writings">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to writings
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="capitalize">
              {writing.type}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {formatDate(writing.publishedAt)}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            {writing.title}
          </h1>

          <div className="relative aspect-[16/9] mb-8">
            <Image
              src={writing.coverImage || "/placeholder.svg"}
              alt={writing.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div
            className="prose prose-stone dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}
