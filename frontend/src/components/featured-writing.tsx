import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Writing } from "@/lib/writings"
import { ArrowRight } from "lucide-react"

interface FeaturedWritingProps {
  writing: Writing
}

export function FeaturedWriting({ writing }: FeaturedWritingProps) {
  return (
    <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src={writing.coverImage || "/placeholder.svg"}
            alt={writing.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="capitalize">
              {writing.type}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {formatDate(writing.publishedAt)}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">{writing.title}</h2>
          <p className="text-muted-foreground mb-6 flex-grow">
            {writing.excerpt}
          </p>
          <Button asChild className="w-fit">
            <Link href={`/writings/${writing.slug}`}>
              Read now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
