"use client"
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/ToggleButton.module.css';
import React from 'react'

const toggleButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      <div>
        <button className={styles.buttonToggle} onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
          {theme === 'dark' ? (
            <FontAwesomeIcon icon={faSun} className={styles.toggleLight} />
          ) : (
            <FontAwesomeIcon icon={faMoon} className={styles.toggleDark} />
          )}
        </button>
      </div>
    );
}
export default toggleButton