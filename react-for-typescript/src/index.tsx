import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./coinTracker/App";


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
// themeProvider는 안에 있는 모든 것이 {theme}으로 접근할 수 있다는 것을 의미
// react query도 같은 맥락으로 queryClientProvider안에 있는 모든 것은 {queryClient}로 접근한다