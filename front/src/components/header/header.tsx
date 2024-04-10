'use client';
import './header.css';

export const Header = () => (
    <div className="header-container">
        <button className="header-logo" onClick={() => window.location.href = window.origin}/>
    </div>
);
