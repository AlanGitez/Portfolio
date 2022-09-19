import { useEffect, useRef, useState } from 'react'

export default function useIntersectionOberserver({ margin = "-50%" }) {
    const [onView, setOnView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0];

            if (element.isIntersecting) {
                setOnView(true);
                observer.disconnect();
            }
        };

        Promise.resolve(
            IntersectionObserver ?
                IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            const observer = new IntersectionObserver(onChange, { rootMargin: margin });
            observer.observe(ref.current);
        });
    }, [])

    return [onView, ref];
};
