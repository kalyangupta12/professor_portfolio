"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// This would typically come from a database or CMS
const books = [
  {
    id: "1",
    title: "The Silent Echo",
    description:
      "A haunting tale of loss and redemption set against the backdrop of a small coastal town. Winner of the National Book Award.\n\nWhen marine biologist Dr. Elena Marsh returns to her hometown after fifteen years away, she's confronted with the mysteries of her past and the uncertain future of the declining fishing village. As she works to save the endangered local ecosystem, she uncovers family secrets that have rippled through generations.\n\nThe Silent Echo explores themes of environmental conservation, community resilience, and the power of confronting one's past.",
    year: "2018",
    amazonLink: "https://www.amazon.com/dp/example1",
    genre: "Literary Fiction",
    pages: 342,
    publisher: "Oceanic Press",
  },
  {
    id: "2",
    title: "Beyond the Horizon",
    description:
      "An epic journey across continents and generations, exploring the bonds that connect us all. Pulitzer Prize Finalist.\n\nSpanning from 1920s Shanghai to present-day San Francisco, this sweeping narrative follows three generations of the Lin family as they navigate war, revolution, and the search for belonging. At its heart is a precious family heirloom that carries both a blessing and a curse.\n\nBeyond the Horizon is a meditation on heritage, sacrifice, and the invisible threads that bind us to our ancestors and to our descendants.",
    year: "2015",
    amazonLink: "https://www.amazon.com/dp/example2",
    genre: "Historical Fiction",
    pages: 512,
    publisher: "Heritage Books",
  },
  {
    id: "3",
    title: "The Last Letter",
    description:
      "A poignant story of love and sacrifice during wartime, told through a series of letters discovered decades later.\n\nWhen journalist Sophia Klein inherits her grandmother's attic apartment in Berlin, she discovers a hidden cache of letters from 1943. As she translates them, she uncovers a love story between a German nurse and an American pilot—and a secret that could rewrite her family history.\n\nThe Last Letter examines the moral complexities of war and the enduring power of love across enemy lines.",
    year: "2020",
    amazonLink: "https://www.amazon.com/dp/example3",
    genre: "Historical Romance",
    pages: 384,
    publisher: "Wartime Press",
  },
  {
    id: "4",
    title: "Midnight Crossing",
    description:
      "A thrilling mystery set at the intersection of two worlds, where nothing is as it seems. Costa Book Award winner.\n\nIn the remote border town of Santa Lucia, Detective Maya Cruz investigates a series of disappearances that locals attribute to ancient myths. As the line between reality and superstition blurs, Maya must confront her own forgotten childhood in the town and the supernatural forces that may be at work.\n\nMidnight Crossing blends police procedural with magical realism in a story about the borders between worlds, beliefs, and identities.",
    year: "2012",
    amazonLink: "https://www.amazon.com/dp/example4",
    genre: "Mystery/Magical Realism",
    pages: 368,
    publisher: "Borderland Books",
  },
  {
    id: "5",
    title: "Whispers of the Tide",
    description:
      "The debut novel that launched a celebrated career, exploring themes of family secrets and natural beauty.\n\nIn a small fishing village on the Atlantic coast, twelve-year-old Mara discovers she can hear the whispers of the sea—warnings of storms, lost ships, and forgotten stories. When a developer threatens to transform the village into a resort, Mara's gift becomes the community's last hope.\n\nWhispers of the Tide is a coming-of-age story about finding one's voice and the deep connection between humans and the natural world.",
    year: "2005",
    amazonLink: "https://www.amazon.com/dp/example5",
    genre: "Coming-of-Age Fiction",
    pages: 298,
    publisher: "Coastal Press",
  },
  {
    id: "6",
    title: "The Glass Room",
    description:
      "A contemporary drama about truth, perception, and the spaces we create between ourselves and others.\n\nArchitect Claire Forrester's latest project—a house made entirely of glass on a cliffside—becomes a mirror for her own life as her marriage begins to fracture. When a mysterious client commissions a similar house directly opposite hers, Claire becomes obsessed with the stranger who seems to be watching her.\n\nThe Glass Room is a taut psychological exploration of transparency, privacy, and the distortions that occur when we believe we can see everything clearly.",
    year: "2022",
    amazonLink: "https://www.amazon.com/dp/example6",
    genre: "Psychological Drama",
    pages: 320,
    publisher: "Modern House Publishing",
  },
]

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id)

  if (!book) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <Link
          href="/books"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Link>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={`https://covers.openlibrary.org/b/title/${encodeURIComponent(
                book.title
              )}-L.jpg`}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                ;(
                  e.target as HTMLImageElement
                ).src = `/placeholder.svg?height=600&width=400&text=${encodeURIComponent(
                  book.title
                )}`
              }}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {book.title}
              </h1>
              <p className="text-muted-foreground">{book.year}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Genre</p>
                <p className="text-muted-foreground">{book.genre}</p>
              </div>
              <div>
                <p className="font-medium">Pages</p>
                <p className="text-muted-foreground">{book.pages}</p>
              </div>
              <div>
                <p className="font-medium">Publisher</p>
                <p className="text-muted-foreground">{book.publisher}</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Synopsis</h2>
              {book.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-4"
              onClick={() =>
                window.open(book.amazonLink, "_blank", "noopener,noreferrer")
              }
            >
              Buy on Amazon
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
