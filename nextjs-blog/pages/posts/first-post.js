import Link from "next/link"
import { useState } from "react";

export default function FirstPost() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>First Post {counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}