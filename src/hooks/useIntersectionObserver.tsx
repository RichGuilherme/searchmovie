import { useEffect, useState } from "react";

export const useIntersectionObserver = (elementRef: React.RefObject<HTMLDivElement>, attLoadingElementObserve: any) => {
    const [isLoadingElementObserve, setIsLoadingElementObserve] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
   
    setIsLoadingElementObserve(attLoadingElementObserve)
    // Esse useEffect serve para obeserva quando o usuário chega no final da página, assim adicionando mais um page.Cada page representa um array com 
    // 20 objetos com os dados dos sobre os filmes e series.
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting) && !isLoadingElementObserve) {
                setIsLoadingElementObserve(true);
                setCurrentPage(currentValue => currentValue + 1)
            }
        })

        if (elementRef.current) {
            intersectionObserver.observe(elementRef.current)
        }

        return () => intersectionObserver.disconnect()
    }, [currentPage, elementRef, isLoadingElementObserve])

    return {currentPage}
}
