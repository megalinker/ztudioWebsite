import React, { useEffect, useRef } from 'react';
import './MobileMenuComponent.css';
import ZtudioLogo from '/assets/ztudioLogo.svg';

interface MobileMenuComponentProps {
    scrollToSection?: (section: string) => void;
    closeMenu: () => void;
}

const MobileMenuComponent: React.FC<MobileMenuComponentProps> = ({ scrollToSection, closeMenu }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuItemClick = (section: string) => {
        if (scrollToSection) {
            scrollToSection(section);
        }
        closeMenu();
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [closeMenu]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeMenu]);

    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-container" ref={menuRef} role="menu">
                {/* Logo */}
                <div className="mobile-menu-logo">
                    <img src={ZtudioLogo} alt="Ztudio Logo" />
                </div>

                {/* Menu Items */}
                <nav className="mobile-menu-nav">
                    <button
                        onClick={() => handleMenuItemClick('home')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('why')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Why?
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('services')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('team')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Team
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('projects')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('contact')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Contact
                    </button>
                </nav>

                {/* Close button */}
                <button
                    className="mobile-menu-close-button"
                    onClick={closeMenu}
                    aria-label="Close Menu"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default MobileMenuComponent;
