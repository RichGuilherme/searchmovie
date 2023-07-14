"use client"

import { SearchResults } from "@/components/searchResults/Index"
import { useSearchParams } from "next/navigation"
export default function ResultsSearch () {
  const searchParams = useSearchParams()
  const params = searchParams.get("search")

  return (
    <main>
        <SearchResults queryProps={params}/>
    </main>
  )
}
