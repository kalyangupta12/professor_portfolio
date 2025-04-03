"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface Book {
  id: string
  title: string
  description: string
  year: string
  amazonLink: string
}

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBookCover = async () => {
      try {
        setIsLoading(true)
        // Using Open Library API to fetch book covers by title
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(
            book.title
          )}&limit=1`
        )
        const data = await response.json()

        if (data.docs && data.docs.length > 0 && data.docs[0].cover_i) {
          const coverId = data.docs[0].cover_i
          setImageUrl(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`)
        } else {
          // Fallback to a placeholder if no cover is found
          setError(true)
        }
      } catch (err) {
        console.error("Error fetching book cover:", err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookCover()
  }, [book.title])

  const handleBuyClick = () => {
    window.open(book.amazonLink, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted">
        {isLoading ? (
          <Skeleton className="h-full w-full" />
        ) : error ? (
          <Image
            src={`/placeholder.svg?height=600&width=400&text=${encodeURIComponent(
              book.title
            )}`}
            alt={`Cover of ${book.title}`}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={
              imageUrl ||
              `/placeholder.svg?height=600&width=400&text=${encodeURIComponent(
                book.title
              )}`
            }
            alt={`Cover of ${book.title}`}
            fill
            className="object-cover transition-all hover:scale-105"
            onError={() => setError(true)}
          />
        )}
      </div>
      <CardContent className="flex-1 p-6">
        <div className="space-y-2">
          <h3 className="font-bold text-xl">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.year}</p>
          <p className="text-sm line-clamp-3">{book.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full gap-2">
          <Button variant="default" className="w-full" onClick={handleBuyClick}>
            Buy on Amazon
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/books/${book.id}`}>Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
