import type { Metadata } from "next"
import WritingsPage from "@/components/writings-page"
import { getWritings } from "@/lib/writings"

export const metadata: Metadata = {
  title: "Writings | Author's Website",
  description: "Explore books, poems, blogs, and other writings by the author",
}

export default async function Writings() {
  const writings = await getWritings()

  return <WritingsPage writings={writings} />
}
