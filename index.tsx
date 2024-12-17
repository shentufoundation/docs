import { useEffect } from "react"
import pageUrls from "../config/pageUrls"

export default function Home() {
    useEffect(() => {
        location.href = pageUrls.docs // This page has too little content, so hide it.
    }, [])

    return (<></>)
}