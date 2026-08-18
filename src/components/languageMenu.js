import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '@context/LanguageContext';
import { locales, localeLabels } from '@i18n';

const StyledWrapper = styled.div`
  position: relative;
  margin-left: 15px;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.smallButton};
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 10px;
    height: 10px;
  }
`;

const StyledDropdown = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 20;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  min-width: 120px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px -10px var(--navy-shadow);

  li button {
    display: block;
    width: 100%;
    padding: 8px 15px;
    background: none;
    border: 0;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-align: left;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--green);
    }

    &[aria-selected='true'] {
      color: var(--green);
    }
  }
`;

const LanguageMenu = () => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <StyledWrapper ref={ref}>
      <StyledButton
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language">
        {locale.toUpperCase()}
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" />
        </svg>
      </StyledButton>

      {open && (
        <StyledDropdown role="listbox">
          {locales.map(code => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}>
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </StyledDropdown>
      )}
    </StyledWrapper>
  );
};

export default LanguageMenu;
