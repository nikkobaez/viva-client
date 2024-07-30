import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { CustomizationProvider } from './context/CustomContext.jsx'
import { register } from 'swiper/element/bundle';

register()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CustomizationProvider>
            <App />
        </CustomizationProvider>
    </React.StrictMode>,
)
