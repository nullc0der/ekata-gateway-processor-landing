import React from 'react'
import ReactDOM from 'react-dom'

import { MatomoProvider, createInstance } from '@jonkoops/matomo-tracker-react'

import App from 'containers/App'
import reportWebVitals from './reportWebVitals'

import '@fontsource/material-icons'
import '@fontsource/material-icons-outlined'

const instance = createInstance({
    urlBase: 'https://matomo.ekata.io',
    siteId: Number(process.env.REACT_APP_MATOMO_SITE_ID),
    disabled: process.env.NODE_ENV !== 'production', // optional, false by default. Makes all tracking calls no-ops if set to true.
})

ReactDOM.render(
    <React.StrictMode>
        <MatomoProvider value={instance}>
            <App />
        </MatomoProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
