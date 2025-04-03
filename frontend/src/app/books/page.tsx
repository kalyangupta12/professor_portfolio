import { BookCard } from "@/components/book-card"
import { Separator } from "@/components/ui/separator"

// This would typically come from a database or CMS
const books = [
  {
    id: "1",
    title: "The Silent Echo",
    description:
      "A haunting tale of loss and redemption set against the backdrop of a small coastal town. Winner of the National Book Award.",
    year: "2018",
    amazonLink: "https://www.amazon.com/dp/example1",
  },
  {
    id: "2",
    title: "Beyond the Horizon",
    description:
      "An epic journey across continents and generations, exploring the bonds that connect us all. Pulitzer Prize Finalist.",
    year: "2015",
    amazonLink: "https://www.amazon.com/dp/example2",
  },
  {
    id: "3",
    title: "The Last Letter",
    description:
      "A poignant story of love and sacrifice during wartime, told through a series of letters discovered decades later.",
    year: "2020",
    amazonLink: "https://www.amazon.com/dp/example3",
  },
  {
    id: "4",
    title: "Midnight Crossing",
    description:
      "A thrilling mystery set at the intersection of two worlds, where nothing is as it seems. Costa Book Award winner.",
    year: "2012",
    amazonLink: "https://www.amazon.com/dp/example4",
  },
  {
    id: "5",
    title: "Whispers of the Tide",
    description:
      "The debut novel that launched a celebrated career, exploring themes of family secrets and natural beauty.",
    year: "2005",
    amazonLink: "https://www.amazon.com/dp/example5",
  },
  {
    id: "6",
    title: "The Glass Room",
    description:
      "A contemporary drama about truth, perception, and the spaces we create between ourselves and others.",
    year: "2022",
    amazonLink: "https://www.amazon.com/dp/example6",
  },
]

export default function BooksPage() {
  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Books
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore my complete collection of novels spanning multiple genres
            and time periods.
          </p>
        </div>

        <Separator />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}
