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
                <a className="active">Back to home</a>
                </Link>
            </h2>
            <style jsx>{`
                h2 {
                    background-color: teal;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </>
    );
}