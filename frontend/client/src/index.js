import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import "./translation/i18n";

// import * as atatus from 'atatus-spa';
// atatus.config('6cc0bcd74dfc46d1ac3057040240ae69').install();

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

process.env.NODE_ENV === "production" && Sentry.init({
  dsn: "https://b8eb1a11ad654e99994c510a60ddb487@o4504276826914816.ingest.sentry.io/4504278718152704",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
