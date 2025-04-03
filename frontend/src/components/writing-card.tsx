import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Writing } from "@/lib/writings"

interface WritingCardProps {
  writing: Writing
}

export function WritingCard({ writing }: WritingCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/9]">
        <Image
          src={writing.coverImage || "/placeholder.svg"}
          alt={writing.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="capitalize">
            {writing.type}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(writing.publishedAt)}
          </span>
        </div>
        <Link href={`/writings/${writing.slug}`}>
          <h3 className="font-semibold text-lg hover:underline">
            {writing.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
          {writing.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/writings/${writing.slug}`}
          className="text-sm font-medium hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}
