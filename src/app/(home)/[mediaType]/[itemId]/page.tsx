"use client"
import { Details } from "@/components/details/Index"
import { useParams } from "next/navigation"

export default function MoreInfor () {
    const params = useParams()
  return (
        <Details movieType={params.mediaType} id={params.itemId}/>
  )
}
