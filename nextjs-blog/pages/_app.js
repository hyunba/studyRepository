import "../styles/globals.css"

export default function App({Component, pageProps}){
    return (
    <div>
        <Component {...pageProps} />
        <span>_app.js를 사용하면 전체 페이지에 적용됩니다.</span>
    </div>
    );
}