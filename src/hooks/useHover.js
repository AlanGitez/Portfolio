import React, { useEffect, useState } from 'react'

export default function useHover() {
    const [isMouseLeave, setIsMouseLeave] = useState(false);

    useEffect(() => {
        console.log("isMouseLeave", isMouseLeave);

    }, [isMouseLeave])

    const onMouseEnter = () => {
        setIsMouseLeave(false);
    }
    const onMouseLeave = () => {
        setIsMouseLeave(true);
    }

    return { onMouseEnter, onMouseLeave, isMouseLeave };
}
