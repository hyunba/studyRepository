import { useRouter } from "next/router";

export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params || [];
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
}
// router는 client side에서 작동한다.

export function getServerSideProps({params:{params}}){
    return {
        props:{
            params,      
        },
    };
}

// localhost:3000/movies를 하나만 필요하다면 movies.js 하나의 파일만 있으면된다.
// 하지만 localhost:3000/movies/all 처럼 여러개의 하위경로가 있으려면 폴더를 하나만들고 index.js와 all.js, tomato.js...등등 만들어줘야한다.

// URL에 변수를 넣는방법은 [].js 대괄호안에 변수명을 넣어주면된다. 출력결과 /movies/11221
