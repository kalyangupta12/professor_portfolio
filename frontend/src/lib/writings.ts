export type WritingType = "book" | "poem" | "blog" | "essay"

export interface Writing {
  id: string
  title: string
  slug: string
  type: WritingType
  excerpt: string
  coverImage: string
  publishedAt: string
  featured?: boolean
  content?: string
}

// This would typically come from a CMS or database
export async function getWritings(): Promise<Writing[]> {
  // Simulating an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: "1",
      title: "The Silent Echo",
      slug: "the-silent-echo",
      type: "book",
      excerpt:
        "A novel about finding one's voice in a world that refuses to listen.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-05-15",
      featured: true,
    },
    {
      id: "2",
      title: "Whispers of Dawn",
      slug: "whispers-of-dawn",
      type: "poem",
      excerpt: "A collection of poems exploring the beauty of new beginnings.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-03-22",
    },
    {
      id: "3",
      title: "The Art of Creative Writing",
      slug: "art-of-creative-writing",
      type: "blog",
      excerpt:
        "Techniques and practices to enhance your creative writing process.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-07-10",
    },
    {
      id: "4",
      title: "Modern Literature and Society",
      slug: "modern-literature-society",
      type: "essay",
      excerpt:
        "An exploration of how contemporary literature reflects and shapes societal values.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-02-18",
    },
    {
      id: "5",
      title: "Shadows of Yesterday",
      slug: "shadows-of-yesterday",
      type: "book",
      excerpt:
        "A gripping mystery set in a small coastal town with dark secrets.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2022-11-30",
    },
    {
      id: "6",
      title: "Autumn Leaves",
      slug: "autumn-leaves",
      type: "poem",
      excerpt:
        "A reflection on change, letting go, and the beauty of impermanence.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-09-05",
    },
    {
      id: "7",
      title: "Finding Inspiration in Everyday Life",
      slug: "finding-inspiration",
      type: "blog",
      excerpt:
        "How to discover creative inspiration in the mundane moments of daily existence.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-08-12",
    },
    {
      id: "8",
      title: "The Evolution of Narrative Structure",
      slug: "evolution-narrative-structure",
      type: "essay",
      excerpt:
        "Analyzing how storytelling techniques have transformed throughout literary history.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2023-01-25",
    },
    {
      id: "9",
      title: "Midnight Chronicles",
      slug: "midnight-chronicles",
      type: "book",
      excerpt:
        "A fantasy series following a group of unlikely heroes in a world of magic and intrigue.",
      coverImage: "/placeholder.svg?height=400&width=600",
      publishedAt: "2022-07-19",
    },
  ]
}

export async function getWritingBySlug(
  slug: string
): Promise<Writing | undefined> {
  const writings = await getWritings()
  return writings.find((writing) => writing.slug === slug)
}
