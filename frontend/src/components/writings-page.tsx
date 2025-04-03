"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { WritingCard } from "@/components/writing-card"
import { FeaturedWriting } from "@/components/featured-writing"
import type { Writing, WritingType } from "@/lib/writings"
import { Search } from "lucide-react"

interface WritingsPageProps {
  writings: Writing[]
}

export default function WritingsPage({ writings }: WritingsPageProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredWriting = writings.find((writing) => writing.featured)

  const filteredWritings = (type: WritingType | "all") => {
    return writings
      .filter(
        (writing) =>
          (type === "all" || writing.type === type) &&
          writing.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
  }

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Writings
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore my collection of books, poems, essays, and other writings.
          </p>
        </div>

        {featuredWriting && (
          <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Featured Work</h2>
            <FeaturedWriting writing={featuredWriting} />
          </div>
        )}

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search writings..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="book">Books</TabsTrigger>
            <TabsTrigger value="poem">Poems</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="essay">Essays</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWritings("all").map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
            {filteredWritings("all").length === 0 && (
              <p className="text-center py-12 text-muted-foreground">
                No writings found.
              </p>
            )}
          </TabsContent>

          <TabsContent value="book" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWritings("book").map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
            {filteredWritings("book").length === 0 && (
              <p className="text-center py-12 text-muted-foreground">
                No books found.
              </p>
            )}
          </TabsContent>

          <TabsContent value="poem" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWritings("poem").map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
            {filteredWritings("poem").length === 0 && (
              <p className="text-center py-12 text-muted-foreground">
                No poems found.
              </p>
            )}
          </TabsContent>

          <TabsContent value="blog" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWritings("blog").map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
            {filteredWritings("blog").length === 0 && (
              <p className="text-center py-12 text-muted-foreground">
                No blog posts found.
              </p>
            )}
          </TabsContent>

          <TabsContent value="essay" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWritings("essay").map((writing) => (
                <WritingCard key={writing.id} writing={writing} />
              ))}
            </div>
            {filteredWritings("essay").length === 0 && (
              <p className="text-center py-12 text-muted-foreground">
                No essays found.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
