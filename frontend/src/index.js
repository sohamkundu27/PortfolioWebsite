import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only',
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostHogProvider apiKey="phc_Aebmrx2jMYgTMr6l38B2MWFevX6oLihukV8m6r0G00x" options={options}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
);
